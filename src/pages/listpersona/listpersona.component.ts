import { Component, ViewChild } from '@angular/core';
import {PersonaComponent} from '../persona/persona.component';
import { MatDialog } from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import { ApiPersonaService } from '../../app/services/api/api.persona.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from "../home/home.component";

import { RouterLink,Router } from '@angular/router';

@Component({
    selector: 'app-listpersona',
    standalone: true,
    templateUrl: './listpersona.component.html',
    styleUrl: './listpersona.component.css',
    imports: [MatInputModule, MatTableModule, MatToolbarModule, MatPaginatorModule, MatFormFieldModule, MatIconModule, HomeComponent]
})
export class ListpersonaComponent {

  constructor(
    private _dialog: MatDialog  ,
    private personaService: ApiPersonaService, 
    private router:Router 
  ) {}


  displayedColumns: string[] = [
    'id',
    'nombre',
    'direccion',    
    'telefono'  
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  ngOnInit(): void {
    this.getPersonasList();
  }

  Home()
  {
    this.router.navigate(['home']); 
  }
  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(PersonaComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          // this.getEmployeeList();
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
          //this.getEmployeeList();
        }
      },
    });
  }

  deletePersona(id: number) {
    // this._empService.deleteEmployee(id).subscribe({
    //   next: (res) => {
    //     this._coreService.openSnackBar('Employee deleted!', 'done');
    //     this.getEmployeeList();
    //   },
    //   error: console.log,
    // });
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


