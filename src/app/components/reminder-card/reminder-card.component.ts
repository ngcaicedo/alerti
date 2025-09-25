import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface Reminder {
  medicationName: string;
  dosage: string;
  form: string;
  nextDose: string;
  frequency: string;
  progress: string;
  dosesTaken: string;
  dosesTotal: string;
}

@Component({
  selector: 'app-reminder-card',
  imports: [CommonModule, MatIconModule],
  templateUrl: './reminder-card.component.html',
  styleUrl: './reminder-card.component.scss'
})
export class ReminderCardComponent {
  @Input() reminder: Reminder = {
    medicationName: 'Acetaminofen',
    dosage: '500gr',
    form: 'Pastilla',
    nextDose: '8:00 am 21/9/25',
    frequency: 'Cada 12h por 7 días',
    progress: '0/14 Dosis',
    dosesTaken: '0',
    dosesTotal: '14'
  };

  onDelete(): void {
    console.log('Eliminar recordatorio');
  }
}
