import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IPlayer {
  id: number,
  name: string,
  position: string,
  dateOfBirth: string,
  countryOfBirth: string,
  nationality: string,
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http: HttpClient) {
      }

}
