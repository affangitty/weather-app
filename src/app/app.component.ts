import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherForecast, WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  forecasts: WeatherForecast[] = [];
  error = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getForecast().subscribe({
      next: (data) => (this.forecasts = data),
      error: () => (this.error = 'Could not load weather data. Is the API reachable at /api/WeatherForecast?')
    });
  }
}
