 
// 'inyect'
import { Component, Inject, OnInit } from '@angular/core';
// 'Forms'
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
 
import {MatFormFieldModule} from '@angular/material/form-field';

import { personaInterface } from '../../app/modelos/personaInterface';
import { ApiPersonaService } from '../../app/services/api/api.persona.service';

import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [MatInputModule, MatRadioModule,MatDialogModule,  MatNativeDateModule ,MatFormFieldModule,MatSelectModule,FormsModule,MatDatepickerModule,CommonModule,ReactiveFormsModule],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})




export class PersonaComponent {

  // constructor(   private _dialogRef: MatDialogRef<PersonaComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: personaInterface 
  // ) {}
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];


  
  form: FormGroup = new FormGroup({
    id: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
  });
  
  onFormSubmit( form:personaInterface)
  {}


}
