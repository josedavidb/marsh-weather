import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForecastConstants } from './forecastConstants';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(
    private httpClient: HttpClient,
    private forecastConstants: ForecastConstants,
  ) { }

  getWeather(latitude: number, longitude: number): Observable<any>{
    // Setup query parameteres
    const params = new HttpParams().set('latitude', latitude).set('longitude', longitude)
    .set('current_weather', true).set('hourly', 'temperature_2m,relativehumidity_2m,surface_pressure,snowfall,cloudcover');
    return this.httpClient.get(`${this.forecastConstants.API_URL}`, {params: params});
  }

  getCapitalList(){
    return this.forecastConstants.listCitiesUS;
  }


}
