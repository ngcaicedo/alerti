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
  
  nombreCompleto: string = '';
  fechaNacimiento: string = '';
  numerocelular: string = '';
  genero: string = '';
  
  usuario: string = '';
  password: string = '';

  genderOptions: ListboxOption[] = [
    { value: 'femenino', label: 'Femenino' },
    { value: 'masculino', label: 'Masculino' },
    { value: 'no-decir', label: 'Prefiero no decirlo' },
    { value: 'otro', label: 'Otro' }
  ];

  onSignup(): void {
    console.log('Signup attempt:', {
      nombreCompleto: this.nombreCompleto,
      fechaNacimiento: this.fechaNacimiento,
      numerocelular: this.numerocelular,
      genero: this.genero,
      usuario: this.usuario,
      password: this.password
    });
    
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      data: {
        title: 'Tu cuenta ha sido creada exitosamente',
        buttonText: 'Entrar'
      },
      disableClose: true,
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

  onLogin(): void {
    console.log('Navigate to login');
    this.router.navigate(['/login']);
  }

  onInputChange(field: string, value: string): void {
    console.log(`${field} changed:`, value);
  }

  onListboxChange(field: string, value: any): void {
    console.log(`${field} changed to:`, value);
  }
}
