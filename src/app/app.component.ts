import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alerti';

  onButtonClick(buttonType: string): void {
    console.log(`Button clicked: ${buttonType}`);
  }
}
