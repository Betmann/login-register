import { Component } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [MainPageComponent]  
})
export class AppComponent {
  title = 'login-register';
}
