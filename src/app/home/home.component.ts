import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../core/services/api/forecast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private forecastService: ForecastService
  ){ }

  ngOnInit(){
    this.forecastService.getWeather(40.71, -74.01).subscribe(data=>{
      console.log(data);
    });
  }
}
