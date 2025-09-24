import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CustomCardHeaderComponent } from '../../components/custom-card-header/custom-card-header.component';
import { CustomTextFieldComponent } from '../../components/custom-text-field/custom-text-field.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule, 
    FormsModule, 
    CustomCardHeaderComponent, 
    CustomTextFieldComponent, 
    CustomButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  constructor(private router: Router) {}
  
  usuario: string = '';
  password: string = '';

  onLogin(): void {
    console.log('Login attempt:', { usuario: this.usuario, password: this.password });
  }

  onRegister(): void {
    console.log('Navigate to signup');
    this.router.navigate(['/signup']);
  }

  onInputChange(field: string, value: string): void {
    console.log(`${field} changed:`, value);
  }
}
