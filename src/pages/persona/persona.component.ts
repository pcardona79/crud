 
// 'inyect'
import { Component, Inject, OnInit } from '@angular/core';
// 'Forms'
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatDateSelectionModel, MatDatepickerModule} from '@angular/material/datepicker';
 
import {MatFormFieldModule} from '@angular/material/form-field';
import { personaInterface } from '../../app/modelos/personaInterface';
import { ApiPersonaService } from '../../app/services/api/api.persona.service';
import {MatButtonModule} from '@angular/material/button';
 
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {mensajeService} from '../../app/services/api/mensaje.service';
 
@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatDatepickerModule,MatInputModule, MatRadioModule,MatDialogModule,  MatNativeDateModule ,MatFormFieldModule,MatSelectModule,FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})

 
export class PersonaComponent implements OnInit  {
 
 
  constructor(   private _dialogRef: MatDialogRef<PersonaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: personaInterface ,
    private  PersonaService: ApiPersonaService,
    private mensaje:mensajeService,
  ) {}
  
  ngOnInit(): void {
    this.form.patchValue(this.data);
  }
  
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
  });
  
 

  onFormSubmit(  ) {
    if (this.form.valid) {
      if (this.data) {
        this.PersonaService.editPersona(this.data.id, this.form.value)
          .subscribe({
            next: (val: any) => {
             this.mensaje.openSnackBar("Registro Actualizado");
            
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this.PersonaService.addPersona(this.form.value).subscribe({
          next: (val: any) => {
            this.mensaje.openSnackBar("Persona Registrada"); 
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}

