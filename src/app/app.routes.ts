import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { PersonaComponent } from '../pages/persona/persona.component';
// import { HomeComponent } from '../pages/home/home.component';
import { ListpersonaComponent } from '../pages/listpersona/listpersona.component';

export const routes: Routes = [


        {
            path:'', 
            component: LoginComponent, 
            outlet:'Login',
         },
  
         {
                path:'login', 
                component: LoginComponent,
            outlet:'Login',

        },
         {
                path:'personaadd', 
                component: PersonaComponent,
            outlet:'Board',

        },
         {
                path:'getpersona', 
                component: ListpersonaComponent,
            outlet:'Board',

        },
        
  ];
        
