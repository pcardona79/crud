import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "../pages/login/login.component";
import { Input, Component, Output, EventEmitter  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


 
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, LoginComponent,HttpClientModule]
})
export class AppComponent {
  title = 'crud';
}
