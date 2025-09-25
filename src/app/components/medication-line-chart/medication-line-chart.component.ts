import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface LineData {
  month: string;
  value: number;
}

export interface LineChartData {
  label: string;
  color: string;
  data: LineData[];
}

@Component({
  selector: 'app-medication-line-chart',
  imports: [CommonModule],
  templateUrl: './medication-line-chart.component.html',
  styleUrl: './medication-line-chart.component.scss'
})
export class MedicationLineChartComponent {
  @Input() chartData: LineChartData[] = [
    {
      label: 'Serie 1',
      color: '#2E5B75',
      data: [
        { month: 'Enero', value: 10 },
        { month: 'Febrero', value: 15 },
        { month: 'Marzo', value: 25 },
        { month: 'Abril', value: 35 },
        { month: 'Mayo', value: 50 },
        { month: 'Junio', value: 60 },
        { month: 'Julio', value: 60 },
        { month: 'Agosto', value: 70 },
        { month: 'Septiembre', value: 80 },
        { month: 'Octubre', value: 93 }
      ]
    },
    {
      label: 'Serie 2',
      color: '#527D96',
      data: [
        { month: 'Enero', value: 5 },
        { month: 'Febrero', value: 10 },
        { month: 'Marzo', value: 15 },
        { month: 'Abril', value: 25 },
        { month: 'Mayo', value: 30 },
        { month: 'Junio', value: 40 },
        { month: 'Julio', value: 45 },
        { month: 'Agosto', value: 55 },
        { month: 'Septiembre', value: 65 },
        { month: 'Octubre', value: 72 }
      ]
    },
    {
      label: 'Serie 3',
      color: '#BDD3E8',
      data: [
        { month: 'Enero', value: 5 },
        { month: 'Febrero', value: 10 },
        { month: 'Marzo', value: 15 },
        { month: 'Abril', value: 20 },
        { month: 'Mayo', value: 25 },
        { month: 'Junio', value: 35 },
        { month: 'Julio', value: 40 },
        { month: 'Agosto', value: 50 },
        { month: 'Septiembre', value: 60 },
        { month: 'Octubre', value: 68 }
      ]
    }
  ];

  get maxValue(): number {
    let max = 0;
    this.chartData.forEach(series => {
      series.data.forEach(point => {
        max = Math.max(max, point.value);
      });
    });
    return max;
  }

  getPointX(index: number, totalPoints: number, width: number): number {
    return (index / (totalPoints - 1)) * (width - 60) + 30;
  }

  getPointY(value: number, height: number): number {
    return height - 40 - ((value / this.maxValue) * (height - 80));
  }

  getPathData(series: LineChartData, width: number, height: number): string {
    if (series.data.length === 0) return '';
    
    const firstPoint = series.data[0];
    const startX = this.getPointX(0, series.data.length, width);
    const startY = this.getPointY(firstPoint.value, height);
    
    let path = `M ${startX} ${startY}`;
    
    for (let i = 1; i < series.data.length; i++) {
      const point = series.data[i];
      const x = this.getPointX(i, series.data.length, width);
      const y = this.getPointY(point.value, height);
      path += ` L ${x} ${y}`;
    }
    
    return path;
  }
}
