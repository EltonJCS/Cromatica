import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PalettesComponent } from './components/palettes/palettes.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PalettesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cromatica';
}
