import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

export interface DialogData {
  title: string;
  buttonText?: string;
  showButton?: boolean;
}

@Component({
  selector: 'app-custom-dialog',
  imports: [CommonModule, MatDialogModule, CustomButtonComponent],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.scss'
})
export class CustomDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  onAction(): void {
    this.dialogRef.close('action');
  }
}
