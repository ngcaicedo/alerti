import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'alerti';

  usuario = '';

  onButtonClick(buttonType: string): void {
    console.log(`Button clicked: ${buttonType}`);
  }

  onTextFieldChange(field: string, value: string): void {
    console.log(`${field} changed to: ${value}`);
  }
}
