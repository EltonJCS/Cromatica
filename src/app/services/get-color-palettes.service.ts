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
    this.http.get(this.apiUrl + this.UrlParameters).subscribe(response => {
      console.log(response);
    });
  }
}
