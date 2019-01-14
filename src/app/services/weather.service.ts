import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ICity } from '../weather/weather.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  urlStart: string;
  apiKey: string;
  urlEnd: string;

  constructor(private http: HttpClient) {
    this.urlStart = 'https://api.openweathermap.org/data/2.5/weather?id=';
    this.apiKey = 'f4bbeb8ec1a8fb95591f2cf112aaa575'
    this.urlEnd = '&appid=' + this.apiKey;
  }

  getConfig(id: number) {
    return this.http.get(this.urlStart + id + this.urlEnd);
  }

  getResults(response): ICity {
    const cityDetails = {
      city: response.name,
      temp: this.convertKelvin(response.main.temp),
      humidity: response.main.humidity,
      minTemp: this.convertKelvin(response.main.temp_min),
      maxTemp: this.convertKelvin(response.main.temp_max)
    }
    return cityDetails;
  }

  convertKelvin(kelvin: number): number {
    const celcius = (kelvin - 273.15).toFixed(2);
    return Number(celcius);
  }

}