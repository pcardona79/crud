import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink,Router } from '@angular/router';

import {PersonaComponent} from '../persona/persona.component';

import { mensajeService } from '../../app/services/api/mensaje.service';
import { ApiPersonaService } from '../../app/services/api/api.persona.service';
@Component({
    selector: 'app-listpersona',
    standalone: true,
    templateUrl: './listpersona.component.html',
    styleUrl: './listpersona.component.css',
    imports: [MatButtonModule,MatInputModule, MatTableModule, MatToolbarModule, MatPaginatorModule, MatFormFieldModule, MatIconModule]
})
export class ListpersonaComponent implements OnInit {

  constructor(
    private _dialog: MatDialog  ,
    private personaService: ApiPersonaService, 
    private router:Router ,
    private mensaje:mensajeService,

  ) {}


  displayedColumns: string[] = [
    'id',
    'nombre',
    'direccion',    
    'telefono' ,
    'accion' 
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  ngOnInit()  {
    this.getPersonasList();    
  }

  // Home()
  // {
  //   this.router.navigate(['home']); 
  // }
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(PersonaComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPersonasList();
        }
      },
    });
  }


  openEditForm(data: any) {
    const dialogRef = this._dialog.open(PersonaComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
         this.getPersonasList();
        }
      },
    });
  }

  deletePersona(id: BigInteger) {
   this.personaService.deletePersona(id).subscribe({
      next: (res) => {
         this.mensaje.openSnackBar("Registro Eliminado");
         this.getPersonasList();
       },
       error: console.log,
    });
  }

  getPersonasList() {
    this.personaService.getPersona().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }


  //paginacion
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


