import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomCardHeaderComponent } from '../../components/custom-card-header/custom-card-header.component';
import { CustomTextFieldComponent } from '../../components/custom-text-field/custom-text-field.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { CustomListboxComponent, ListboxOption } from '../../components/custom-listbox/custom-listbox.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [
    CommonModule, 
    FormsModule, 
    CustomCardHeaderComponent, 
    CustomTextFieldComponent, 
    CustomButtonComponent,
    CustomListboxComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  // Datos personales
  nombreCompleto: string = '';
  fechaNacimiento: string = '';
  numerocelular: string = '';
  genero: string = '';
  
  // Datos de cuenta
  usuario: string = '';
  password: string = '';

  // Opciones para el selector de género
  genderOptions: ListboxOption[] = [
    { value: 'femenino', label: 'Femenino' },
    { value: 'masculino', label: 'Masculino' },
    { value: 'no-decir', label: 'Prefiero no decirlo' },
    { value: 'otro', label: 'Otro' }
  ];

  // Manejo de creación de cuenta
  onSignup(): void {
    console.log('Signup attempt:', {
      nombreCompleto: this.nombreCompleto,
      fechaNacimiento: this.fechaNacimiento,
      numerocelular: this.numerocelular,
      genero: this.genero,
      usuario: this.usuario,
      password: this.password
    });
    // Aquí iría la lógica de registro
  }

  // Navegar a login
  onLogin(): void {
    console.log('Navigate to login');
    // Aquí iría la navegación a login
  }

  // Manejo de cambios en inputs
  onInputChange(field: string, value: string): void {
    console.log(`${field} changed:`, value);
  }

  // Manejo de cambios en listbox
  onListboxChange(field: string, value: any): void {
    console.log(`${field} changed to:`, value);
  }
}
