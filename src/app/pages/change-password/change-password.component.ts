import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTextFieldComponent } from '../../components/custom-text-field/custom-text-field.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { CustomDialogComponent } from '../../components/custom-dialog/custom-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-change-password',
  imports: [CommonModule, CustomTextFieldComponent, CustomButtonComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {

  @Output() navigateToHome = new EventEmitter<void>();

  constructor(
    private dialog: MatDialog
  ) {}

  newPassword: string = '';
  confirmPassword: string = '';

  onNewPasswordChange(value: string): void {
    this.newPassword = value;
  }

  onConfirmPasswordChange(value: string): void {
    this.confirmPassword = value;
  }

  onSave(): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
        data: {
          title: 'Tu contraseña ha sido cambiada exitosamente',
          showButton: false
        },
        hasBackdrop: true,
        backdropClass: 'custom-dialog-backdrop'
      });    

    dialogRef.afterClosed().subscribe(result => {
        this.navigateToHome.emit();
    });
  }

  onCancel(): void {
    this.newPassword = '';
    this.confirmPassword = '';
    console.log('Password change cancelled');
  }
}
