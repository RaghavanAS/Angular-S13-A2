import { Injectable } from '@angular/core';

@Injectable()
export class CityService {
  // CityList array
  CityList: string[]= [];

  // initializing the City List array in constructor
  constructor() {
    this.CityList.unshift('Chennai');
    this.CityList.unshift('Bangalore');
    this.CityList.unshift('Hyderabad');
    this.CityList.unshift('Pune');
   }

   // returns the city list
  getCityList(): string[] {
    return this.CityList;
  }
}
