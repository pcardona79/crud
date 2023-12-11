import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { PersonaComponent } from '../pages/persona/persona.component';
import { HomeComponent } from '../pages/home/home.component';
import { ListpersonaComponent } from '../pages/listpersona/listpersona.component';

export const routes: Routes = [


        {
            path:'', 
            component: LoginComponent 
         },
  
         {
                path:'home', 
                component: HomeComponent
        },
         {
                path:'personaadd', 
                component: PersonaComponent
        },
         {
                path:'getpersona', 
                component: ListpersonaComponent
        },
        
  ];
        
