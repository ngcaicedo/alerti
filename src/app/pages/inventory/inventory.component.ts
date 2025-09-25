import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-inventory',
  imports: [CommonModule, FormsModule, MatIconModule, MatInputModule, MatCheckboxModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {

  @Output() navigateToHome = new EventEmitter<void>();

  showAddRow: boolean = false;

  onAddMedication(): void {
    this.showAddRow = !this.showAddRow;
  }

  onNavigateToHome(): void {
    this.navigateToHome.emit();
  }

  onSaveMedication(): void {
    console.log('Guardar medicamento');
    this.showAddRow = false;
  }

  onCancelAdd(): void {
    this.showAddRow = false;
  }
}
