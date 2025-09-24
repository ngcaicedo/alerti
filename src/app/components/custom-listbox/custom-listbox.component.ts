import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';

export interface ListboxOption {
  value: any;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-custom-listbox',
  imports: [CommonModule, FormsModule, MatSelectModule, MatFormFieldModule, MatOptionModule],
  templateUrl: './custom-listbox.component.html',
  styleUrl: './custom-listbox.component.scss'
})
export class CustomListboxComponent {
  @Input() label: string = '';
  @Input() placeholder: string = 'Seleccionar...';
  @Input() options: ListboxOption[] = [];
  @Input() value: any = null;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() multiple: boolean = false;
  @Input() width: string = '322px';

  @Output() valueChange = new EventEmitter<any>();
  @Output() selectionChange = new EventEmitter<any>();

  onSelectionChange(newValue: any): void {
    this.value = newValue;
    this.valueChange.emit(newValue);
    this.selectionChange.emit(newValue);
  }
}
