import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

export interface ICity {
  city: string,
  temp: number,
  humidity: number,
  minTemp: number,
  maxTemp: number
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  london: ICity;
  rome: ICity;
  bristol: ICity;

  londonID: number = 2643744;
  romeID: number = 4219762;
  bristolID: number = 4749005;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(){
    this.weatherService.getConfig(this.londonID).subscribe((response) => {
      this.london = this.weatherService.getResults(response);
    })
    this.weatherService.getConfig(this.bristolID).subscribe((response) => {
      this.bristol = this.weatherService.getResults(response);
    })
    this.weatherService.getConfig(this.romeID).subscribe((response) => {
      this.rome = this.weatherService.getResults(response);
    })
  }

  

}
