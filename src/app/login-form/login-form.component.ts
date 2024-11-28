import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  standalone: true,
  imports: [FormsModule]  
})
export class LoginFormComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    alert(`Email: ${this.email}\nSenha: ${this.password}`);
  }
}
