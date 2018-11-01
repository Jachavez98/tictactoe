import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../services/weather';
import { Storage } from '@ionic/storage';
// import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-local-weather',
  templateUrl: 'local-weather.html'
})
export class LocalWeatherPage {
  weather: any;
  location: {
    state: string,
    city: string
  }

  public locationList: Array<any> = [
    {city: 'Montemorelos', state: 'MX'},
    {city: 'Nuevo Leon', state: 'CE'},
    {city: 'Nuevo Leon', state: 'Argentina'},
    {city: 'Monterrey', state: 'MX'},
    {city: 'Baja California', state: 'MX'}
  ]

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage) {
  }

  ionViewWillEnter() {
      this.static();
  }

  public getWeather(location) {
      this.location = location;
    this.weatherProvider.getWeather(this.location.state, this.location.city).subscribe((weather: any) => {
      this.weather = weather.current_observation;
    });
  }

   public static() {
    this.weatherProvider.climaestatico().subscribe((weather: any) => {
      this.weather = weather.current_observation;
    });
  }

}
