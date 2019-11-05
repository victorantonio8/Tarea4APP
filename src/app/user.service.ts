import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getWeather(IdCiudad) 
  {      return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?APPID=2ebb8d634e6ad8b6841eb487bcd37103&id=${IdCiudad}`);   }
}
