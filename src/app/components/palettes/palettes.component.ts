import { Component, inject } from '@angular/core';
import { GetColorPalettesService } from '../../services/get-color-palettes.service';

@Component({
  selector: 'app-palettes',
  imports: [],
  templateUrl: './palettes.component.html',
  styleUrl: './palettes.component.css'
})
export class PalettesComponent {
  private getPaletteModels = inject(GetColorPalettesService);

  getModels(){
this.getPaletteModels.getPaletteModels();
  }
}
