import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { CityDailyWeather, CityWeather } from '../models/weather.model';
import { responseToCityDailyWeather, responseToCityWeather } from '../utils/response.utils';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCityWeatherByQuery(query: string): Observable<CityWeather> {
      const params = new HttpParams( { fromObject: { q: query }});
      return this.doGet('weather', params)
                 .pipe(map(response => responseToCityWeather(response)));
  }

  getCityWeatherByCoord(lat: number, lon: number): Observable<CityWeather> {
      const params = new HttpParams({fromObject: {
        lat: lat.toString(),
        lon: lon.toString()
      }});

      return this.doGet<any>('weather', params)
                 .pipe(map((response) => responseToCityWeather(response)));
  }

  getWeatherDetails(lat: number, lon: number): Observable<CityDailyWeather> {
      const params = new HttpParams({fromObject: {
          lat: lat.toString(),
          lon: lon.toString(),
          exclude: 'minutely,hourly'
      }});

      return this.doGet<any>('onecall', params)
                 .pipe(map((response) => responseToCityDailyWeather(response)));
  }

  private doGet<T>(url: string, params: HttpParams): Observable<T> {
      params = params.append('lang', 'en');
      params = params.append('appid', environment.apiKey);
      return this.httpClient.get<T>(`https://api.openweathermap.org/data/2.5/${url}`, { params });
  }
}