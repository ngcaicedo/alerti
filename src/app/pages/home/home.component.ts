import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderCardComponent, Reminder } from '../../components/reminder-card/reminder-card.component';
import { MedicationChartComponent } from '../../components/medication-chart/medication-chart.component';
import { MedicationLineChartComponent } from '../../components/medication-line-chart/medication-line-chart.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReminderCardComponent, MedicationChartComponent, MedicationLineChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @Output() navigateToInventory = new EventEmitter<void>();

  reminders: Reminder[] = [
    {
      medicationName: 'Acetaminofen',
      dosage: '500gr',
      form: 'Pastilla',
      nextDose: '8:00 am 21/9/25',
      frequency: 'Cada 12h por 7 días',
      progress: '0/14 Dosis',
      dosesTaken: '0',
      dosesTotal: '14'
    },
    {
      medicationName: 'Ibuprofeno',
      dosage: '400mg',
      form: 'Cápsula',
      nextDose: '2:00 pm 22/9/25',
      frequency: 'Cada 8h por 5 días',
      progress: '2/15 Dosis',
      dosesTaken: '2',
      dosesTotal: '15'
    },
    {
      medicationName: 'Loratadina',
      dosage: '10mg',
      form: 'Pastilla',
      nextDose: '6:00 am 23/9/25',
      frequency: 'Cada 24h por 10 días',
      progress: '5/10 Dosis',
      dosesTaken: '5',
      dosesTotal: '10'
    },
    {
      medicationName: 'Omeprazol',
      dosage: '20mg',
      form: 'Cápsula',
      nextDose: '7:30 am 24/9/25',
      frequency: 'Cada 24h por 14 días',
      progress: '3/14 Dosis',
      dosesTaken: '3',
      dosesTotal: '14'
    },
    {
      medicationName: 'Metformina',
      dosage: '850mg',
      form: 'Pastilla',
      nextDose: '12:00 pm 25/9/25',
      frequency: 'Cada 12h por 30 días',
      progress: '12/60 Dosis',
      dosesTaken: '12',
      dosesTotal: '60'
    }
  ];

  onViewInventory(): void {
    this.navigateToInventory.emit();
  }
}
