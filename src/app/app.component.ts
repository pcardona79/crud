import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "../pages/login/login.component";
import { Input, Component, Output, EventEmitter  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink,Router } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
 

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, LoginComponent,HttpClientModule,MatIconModule,MatSidenavModule,MatButtonModule,MatToolbarModule,MatRippleModule,RouterLink,MatListModule]
})

export class AppComponent {

 
  constructor  ( private router:Router ){}
  getToken() {  
    return localStorage.getItem("token");
  }

  OnNavega(item:string)
  {
    //navega a la pagina de inicio

    switch ( item ) {
      case 'login':
        localStorage.removeItem("token");
        this.router.navigate([{outlets: {Login: ['login']}}]); 
      
        break;
      case 'people':
        this.router.navigate([{outlets: {Board: ['getpersona']}}]); 
        break;
    }
  }
  title = 'crud';

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
