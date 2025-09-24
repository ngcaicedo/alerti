import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-card-header',
  imports: [CommonModule, MatCardModule],
  templateUrl: './custom-card-header.component.html',
  styleUrl: './custom-card-header.component.scss'
})
export class CustomCardHeaderComponent {
  @Input() title: string = 'Bienvenido a Alerti';
  @Input() height: string = '140px';
  @Input() titleStyle: 'default' | 'small' = 'default';
  @Input() showBackgroundPattern: boolean = true;
  @Input() variant: 'header' | 'content' = 'header';
  @Input() width: string = '100%';
  @Input() showTitle: boolean = true;
}
