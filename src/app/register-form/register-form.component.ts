import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
  standalone: true,
  imports: [FormsModule, LoginFormComponent]  
})
export class RegisterFormComponent {
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  edv: string = '';

  onSubmit() {
    alert(`Email: ${this.email}\nSenha: ${this.password}\nRepetir Senha: ${this.repeatPassword}\nEDV: ${this.edv}`);
  }
}
