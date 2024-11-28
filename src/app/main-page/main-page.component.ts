import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone: true,
  imports: [CommonModule, LoginFormComponent, RegisterFormComponent] 
})
export class MainPageComponent {
  isLogin: boolean = true;

  showLoginForm() {
    this.isLogin = true;
  }

  showRegisterForm() {
    this.isLogin = false;
  }
}
