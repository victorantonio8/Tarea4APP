import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarea4API';
  CiudadSelec : any;
  Numero : any;


  constructor(    
    public UserService: UserService) 
    {   }
  
    Paises(CiudadSelecta,temperatura, humedad, tempmax, tempmin, nubes) {
      this.UserService.getWeather(CiudadSelecta)
        .subscribe(
          (data) => { // Success     
            this.CiudadSelec = (data);
            this.Numero = this.CiudadSelec.main.temp - 273.15;
            document.getElementById(temperatura).innerHTML = String(this.Numero.toFixed());
            document.getElementById(humedad).innerHTML = this.CiudadSelec.main.humidity;
            this.Numero = this.CiudadSelec.main.temp_max - 273.15;
            document.getElementById(tempmax).innerHTML = String(this.Numero.toFixed());
            this.Numero = this.CiudadSelec.main.temp_min - 273.15;
            document.getElementById(tempmin).innerHTML = String(this.Numero.toFixed());
            document.getElementById(nubes).innerHTML = this.CiudadSelec.clouds.all;
          },
          (error) => {
            console.error(error);
          }
        );
    }



}

