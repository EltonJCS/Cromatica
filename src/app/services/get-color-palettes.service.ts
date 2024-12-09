import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetColorPalettesService {
  private apiUrl: string = 'https://www.thecolorapi.com/';

  constructor(private http: HttpClient) {}

  getRandomHexColorCode(): string {
    const letters = '0123456789ABCDEF';
    let hexColorCode = '';
    for (let i = 0; i < 6; i++) {
      hexColorCode += letters[Math.floor(Math.random() * 16)];
    }
    return hexColorCode;
  }

  async getPaletteModels() {
    const hexColor: string = this.getRandomHexColorCode();
    const UrlParameters: string = `scheme?hex=${hexColor}&mode=monochrome`;

    try {
      const response = await firstValueFrom(
        this.http.get<{ [key: string]: any[] }>(this.apiUrl + UrlParameters)
      );
      const data = response;
      for (let i = 0; i < data['colors'].length; i++) {
        localStorage.setItem(
          `color${i}`,
          data['colors'][`${i}`]['hex']['value']
        );
      }
    } catch (error) {
      console.error('Error fetching color data:', error);
    }
  }
}
