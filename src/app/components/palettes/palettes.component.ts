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

  ngOnInit(){
    this.updateLocalStorageColors();
  }

  async getModels(){
    await this.getPaletteModels.getPaletteModels();
  }

  updateLocalStorageColors(){
    if(localStorage.getItem(`color0`) === (this.colors[0] || '#ffffff')){
      return;
    }
    this.colors= [];
    for (let i = 0; i < 5; i++) {
      const color = localStorage.getItem(`color${i}`);
      this.colors.push(color || '#ffffff');
    }
  }

  async showColors(){
    await this.getModels();
    this.updateLocalStorageColors();
  }
  
}
