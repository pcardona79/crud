import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink,Router } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatSidenavModule,MatButtonModule,MatToolbarModule,MatMenuModule,MatRippleModule,RouterLink,MatListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor  ( private router:Router ){}
  OnNavega(item:string)
  {
    //navega a la pagina de inicio

    switch ( item ) {
      case '':
        this.router.navigate(['']); 
        break;
      case 'people':
        this.router.navigate(['getpersona']); 
        break;
    }
  }

   
  links = [
    {
      name: "Persona",
      key:"people"
    },
    {
      name: "Agendas", 
      key:"book"

    },
    {
      name: "Reportes",     
      key: "report"

    }
  ]
}
