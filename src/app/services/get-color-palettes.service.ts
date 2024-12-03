import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetColorPalettesService {

private apiUrl: string = 'https://www.thecolorapi.com/';
private UrlParameters: string = 'scheme?hex=ff0000&mode=monochrome';

  constructor(private http: HttpClient) { }

  async getPaletteModels(){
    this.http.get<{ [key: string]: any[] }>(this.apiUrl + this.UrlParameters).subscribe(response => {
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
