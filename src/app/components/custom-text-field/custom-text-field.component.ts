import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-custom-text-field',
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './custom-text-field.component.html',
  styleUrl: './custom-text-field.component.scss'
})
export class CustomTextFieldComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'password' = 'text';
  @Output() valueChange = new EventEmitter<string>();
  @Output() inputChange = new EventEmitter<string>();

  onValueChange(newValue: string): void {
    this.value = newValue;
    this.valueChange.emit(newValue);
    this.inputChange.emit(newValue);
  }
}
