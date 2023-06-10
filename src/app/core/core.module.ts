import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastService } from './services/api/forecast.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ForecastService
  ]
})
export class CoreModule { }
