import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MedicationData {
  label: string;
  value: number;
  color: string;
}

@Component({
  selector: 'app-medication-chart',
  imports: [CommonModule],
  templateUrl: './medication-chart.component.html',
  styleUrl: './medication-chart.component.scss'
})
export class MedicationChartComponent {
  @Input() data: MedicationData[] = [
    { label: 'Tomados', value: 60.0, color: '#527D96' },
    { label: 'En inventario', value: 25.0, color: '#BDD3E8' },
    { label: 'Vencidos', value: 15.0, color: '#E8DEF8' }
  ];

  get total(): number {
    return this.data.reduce((sum, item) => sum + item.value, 0);
  }

  getChartPath(index: number): string {
    const radius = 65;
    return `M 90,90 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`;
  }

  getStrokeDasharray(index: number): string {
    const radius = 65;
    const circumference = 2 * Math.PI * radius;
    const dashLength = (this.data[index].value / 100) * circumference;
    return `${dashLength} ${circumference}`;
  }

  getStrokeDashoffset(index: number): number {
    const radius = 65;
    const circumference = 2 * Math.PI * radius;
    let offset = 0;
    
    for (let i = 0; i < index; i++) {
      offset += (this.data[i].value / 100) * circumference;
    }
    
    return offset;
  }

  getLabelPosition(index: number): { x: number; y: number } {
    const radius = 65;
    const labelRadius = radius + 25;
    
    let angle = 0;
    for (let i = 0; i < index; i++) {
      angle += (this.data[i].value / 100) * 360;
    }
    angle += (this.data[index].value / 100) * 360 / 2;
    
    const radians = (angle * Math.PI) / 180;
    const x = 90 + labelRadius * Math.cos(radians);
    const y = 90 + labelRadius * Math.sin(radians);
    
    return { x, y };
  }

  getInnerLabelPosition(index: number): { x: number; y: number } {
    const radius = 65;
    const innerLabelRadius = radius * 0.7;
    
    let angle = 0;
    for (let i = 0; i < index; i++) {
      angle += (this.data[i].value / 100) * 360;
    }
    angle += (this.data[index].value / 100) * 360 / 2;
    
    const radians = (angle * Math.PI) / 180;
    const x = 90 + innerLabelRadius * Math.cos(radians);
    const y = 90 + innerLabelRadius * Math.sin(radians);
    
    return { x, y };
  }

  getArcPath(index: number): string {
    const radius = 65;
    const centerX = 90;
    const centerY = 90;
    
    let startAngle = 0;
    for (let i = 0; i < index; i++) {
      startAngle += (this.data[i].value / 100) * 360;
    }
    
    const segmentAngle = (this.data[index].value / 100) * 360;
    const endAngle = startAngle + segmentAngle;
    
    const startRadians = (startAngle - 90) * (Math.PI / 180);
    const endRadians = (endAngle - 90) * (Math.PI / 180);
    
    const x1 = centerX + radius * Math.cos(startRadians);
    const y1 = centerY + radius * Math.sin(startRadians);
    const x2 = centerX + radius * Math.cos(endRadians);
    const y2 = centerY + radius * Math.sin(endRadians);
    
    const largeArcFlag = segmentAngle > 180 ? 1 : 0;
    
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`;
  }
}
