import { select, Store } from '@ngrx/store';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { AppState } from '../state/app.reducer';
import { environment } from 'src/environments/environment';
import { CityDailyWeather, CityWeather } from '../models/weather.model';
import { responseToCityDailyWeather, responseToCityWeather } from '../utils/response.utils';

import * as fromConfigSelectors from 'src/app/shared/state/config/config.selectors';


@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnDestroy{

  private serviceDestroyed$ = new Subject();
  private unit: string;

  constructor(private httpClient: HttpClient,
              private store: Store<AppState>) {
      store.pipe(
        select(fromConfigSelectors.selectConfigUnit),
        takeUntil(this.serviceDestroyed$)
      ).subscribe((u) => this.unit = u)
  }

  ngOnDestroy(): void {
      this.serviceDestroyed$.next();
      this.serviceDestroyed$.unsubscribe();
  }

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

      if(this.unit !== 'SI') {
        params = params.append('units', this.unit.toLocaleLowerCase());
      }

      return this.httpClient.get<T>(`https://api.openweathermap.org/data/2.5/${url}`, { params });
  }
}