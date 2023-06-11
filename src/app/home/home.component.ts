import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../core/services/api/forecast.service';
import { City } from '../core/models/City';
import { IconDefinition, faCloudSun, faSnowflake, faCloudRain, faSun, faCloudMoon, faMoon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Icons
  faCloudSun: IconDefinition = faCloudSun;
  faCloudRain: IconDefinition = faCloudRain;
  faSnowflake: IconDefinition = faSnowflake;
  faSun: IconDefinition = faSun;
  faCloudMoon: IconDefinition = faCloudMoon;
  faMoon: IconDefinition = faMoon;

  citiesList: readonly City[];
  currentCity: City;
  weatherCity: any;
  timePosition: number;
  timePositionTomorrow: number;
  timePositionAfterTomorrow: number;
  isLoading: boolean = true;

  constructor(
    private forecastService: ForecastService
    
  ){ }

  ngOnInit(){
    this.currentCity = this.forecastService.getCapitalList()[0];
    this.citiesList = this.forecastService.getCapitalList();
    this.loadCityInfo();
  }

  loadCityInfo(){
    this.isLoading = true;
    this.forecastService.getWeather(this.currentCity.latitude, this.currentCity.longitude).subscribe(data=>{
      console.log(data);
      this.weatherCity = data;
      this.timePosition = this.getTimePosition(this.weatherCity.current_weather.time);
      this.timePositionTomorrow = this.getTimePosition(this.getTimeTomorrow(1));
      this.timePositionAfterTomorrow = this.getTimePosition(this.getTimeTomorrow(2));
      this.weatherCity.current_weather.humidity = this.getHumidityByPos();
      this.weatherCity.current_weather.pressuare = this.getSurfacePressureByPos();
      this.weatherCity.current_weather.snowfall = this.getSnowfallByPos();
      this.weatherCity.current_weather.cloudcover = this.getCloudCoverByPos();
      this.weatherCity.current_weather.status = this.getWeatherStatus();
      this.weatherCity.current_weather.tomorrow_temperature = this.getTemperatureByPos(this.timePositionTomorrow);
      this.weatherCity.current_weather.after_tomorrow_temperature = this.getTemperatureByPos(this.timePositionAfterTomorrow);
      this.isLoading = false;
    });
  }

  getTimeTomorrow(numberToAdd: number){
    const currentTime: Date = new Date(this.weatherCity.current_weather.time);
    const tomorrowTime: Date = new Date(currentTime);
    tomorrowTime.setDate(tomorrowTime.getDate() + numberToAdd);
    return tomorrowTime.toISOString().replace(":00.000Z", "");
  }

  getTimePosition(time: string): number{
    let position: number = 0;
    this.weatherCity.hourly.time.forEach((timeHour: string, index: number) => {
      if (timeHour === time){
        position = index;
      }
    });
    return position;
  }

  getTemperatureByPos(position: number): number {
    return this.weatherCity.hourly.temperature_2m[position];
  }

  getHumidityByPos(): number{
    return this.weatherCity.hourly.relativehumidity_2m[this.timePosition];
  }

  getSurfacePressureByPos(): number {
    return this.weatherCity.hourly.surface_pressure[this.timePosition];
  }

  getSnowfallByPos(): number {
    return this.weatherCity.hourly.snowfall[this.timePosition];
  }

  getCloudCoverByPos(): number {
    return this.weatherCity.hourly.cloudcover[this.timePosition];
  }

  getWeatherStatus(){
    // Case when is snowing
    if (this.weatherCity.current_weather.snowfall > 0){
      return 'snowy'
    }
    
    // Case when is very cloudy
    if (this.weatherCity.current_weather.cloudcover > 50){
      return 'cloudy'
    }
    if (this.weatherCity.current_weather.is_day === 1){

      // Case when is cloudy and day
      if (this.weatherCity.current_weather.cloudcover > 20){
        return 'cloudy-sun'
      }

      // Case when is day
      return 'sunny'
    }
    if (this.weatherCity.current_weather.is_day === 0){

      // Case when is cloudy and night
      if (this.weatherCity.current_weather.cloudcover > 20){
        return 'cloudy-night'
      }

      // Case when is night
      return 'night'
    }

    // Default
    return this.faCloudSun;
  }

  getBackgroundColor(): string {
    switch(this.weatherCity?.current_weather?.status) {
      case 'snowy': return 'blue-bg';
      case 'cloudy': return 'gray-bg';
      case 'cloudy-sun': return 'blue-bg';
      case 'sunny': return 'yellow-bg';
      case 'cloudy-night': return 'purple-bg';
      case 'night': return 'purple-bg'
      default: return 'blue-bg';
    }
  }

  getWeatherIcon(): IconDefinition {

    switch(this.weatherCity?.current_weather?.status) {
      case 'snowy': return this.faSnowflake;
      case 'cloudy': return this.faCloudRain;
      case 'cloudy-sun': return this.faCloudSun;
      case 'sunny': return this.faSun;
      case 'cloudy-night': return this.faCloudMoon;
      case 'night': return this.faMoon
      default: return this.faCloudMoon;
    }
  }

  // getBackground(): string {
  //   if 
  // }
}
