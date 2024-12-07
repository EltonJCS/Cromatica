import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PalettesComponent } from './components/palettes/palettes.component';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PalettesComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cromatica';
}
