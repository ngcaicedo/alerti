import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CustomCardHeaderComponent } from '../../components/custom-card-header/custom-card-header.component';
import { CustomTextFieldComponent } from '../../components/custom-text-field/custom-text-field.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { CustomListboxComponent, ListboxOption } from '../../components/custom-listbox/custom-listbox.component';
import { CustomDialogComponent } from '../../components/custom-dialog/custom-dialog.component';

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
  
  constructor(
    private router: Router,
    private dialog: MatDialog
  ) {}
  
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
    
    // Abrir dialog de confirmación
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      data: {
        title: 'Tu cuenta ha sido creada exitosamente',
        buttonText: 'Entrar'
      },
      disableClose: true, // No permite cerrar con ESC o click fuera
      hasBackdrop: true,
      backdropClass: 'custom-dialog-backdrop'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'action') {
        console.log('Usuario eligió "Entrar" - navegando a login');
        this.router.navigate(['/login']);
      }
    });
  }

  // Navegar a login
  onLogin(): void {
    console.log('Navigate to login');
    this.router.navigate(['/login']);
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
