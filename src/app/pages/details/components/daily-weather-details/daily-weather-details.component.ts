import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { DailyWeather, Weather } from 'src/app/shared/models/weather.model';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-daily-weather-details',
  templateUrl: './daily-weather-details.component.html',
  styleUrls: ['./daily-weather-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DailyWeatherDetailsComponent  {

  @Input() dailyWeather: DailyWeather;
  @Input() timeZone?: string;

  get weather(): Weather {
    return this.dailyWeather.weather;
  }

  get icon(): string {
    return `http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`;
  }

  get day(): string {
    return moment.unix(this.dailyWeather.date).format('DD')
  }

  get month(): string {
    return moment.unix(this.dailyWeather.date).format('MMMM')
  }

}
