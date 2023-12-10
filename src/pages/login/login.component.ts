 
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {ApiLoginService} from '../../app/services/api/api.login.service';
import { loginInterface } from '../../app/modelos/loginInterface';

//para ir al home al loguearse
import { Router } from '@angular/router';
// para analizar respuesta d eapi

import {responseInterface} from '../../app/modelos/responseInterface';
//para mensajes en pantalla
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarModule, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({    
  selector: 'app-login',
  standalone: true,
  imports: [ MatCardModule, FormsModule, MatSnackBarModule,  ReactiveFormsModule,MatFormFieldModule,MatInputModule,CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
 
  constructor (private api:ApiLoginService, private router:Router,private msj: MatSnackBar){}
  horizontalPosition: MatSnackBarHorizontalPosition ='center';
  verticalPosition: MatSnackBarVerticalPosition ='bottom'

  form: FormGroup = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  

  //carga mensaje de validacion
  openSnackBar( mensaje: string) {
    this.msj.open(mensaje, 'Importante', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }

  submit( form:loginInterface)
  {

    if (form.email && form.password){  
      this.api.loginByEmail(form).subscribe(data =>{
        console.log (data);
        let dataResponse:responseInterface=data; // para formar la respuesta y cargarla en pantalla 
        if ( dataResponse.access_token)
        {  //almaceno token
          localStorage.setItem ("token",dataResponse.access_token);
          sessionStorage.setItem ("token",dataResponse.access_token);
          this.router.navigate(['home']); //navega a la pagina de inicio
        }   },
        error => {
          this.openSnackBar("Usuario sin acceso");
         }        
        );
     
  }   
    else{
      this.openSnackBar("Error con datos ingresados");
    }
  }
  
 
 
}
