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
  colors: string[] = [];

  getModels(){
this.getPaletteModels.getPaletteModels();
  }

  getLocalStorageColors(){
    for (let i = 0; i < 5; i++) {
      const color = localStorage.getItem(`color${i}`);
      this.colors.push(color || '#ffffff');
    }
  }

  showColors(){
    this.getModels();
    this.getLocalStorageColors();
  }
}
