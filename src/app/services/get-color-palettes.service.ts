import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetColorPalettesService {

private apiUrl: string = 'https://www.thecolorapi.com/';


  constructor(private http: HttpClient) { }

  getRandomHexColorCode(): string {
    const letters = '0123456789ABCDEF';
    let hexColorCode = '';
    for (let i = 0; i < 6; i++) {
      hexColorCode += letters[Math.floor(Math.random() * 16)];
    }
    return hexColorCode;
  }
  
  async getPaletteModels(){
    const hexColor:string = this.getRandomHexColorCode();
    const UrlParameters: string = `scheme?hex=${hexColor}&mode=monochrome`;

    this.http.get<{ [key: string]: any[] }>(this.apiUrl + UrlParameters).subscribe(response => {
      const data = response;
      console.log(data["colors"]);
      localStorage.setItem("color0", data["colors"]["0"]["hex"]["value"]);
      localStorage.setItem("color1", data["colors"]["1"]["hex"]["value"]);
      localStorage.setItem("color2", data["colors"]["2"]["hex"]["value"]);
      localStorage.setItem("color3", data["colors"]["3"]["hex"]["value"]);
      localStorage.setItem("color4", data["colors"]["4"]["hex"]["value"]);
    });
  }
}
