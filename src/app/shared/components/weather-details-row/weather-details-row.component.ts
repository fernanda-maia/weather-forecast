import { Component, Input } from '@angular/core';
import { CityWeather } from '../../models/weather.model';

import * as moment from 'moment-timezone';


@Component({
  selector: 'app-weather-details-row',
  templateUrl: './weather-details-row.component.html',
  styleUrls: ['./weather-details-row.component.css']
})
export class WeatherDetailsRowComponent {

  @Input() cityWeather: CityWeather | undefined;
  @Input() moreInfo?: boolean;


  unixToMinute(value: number): string {
    return moment.unix(value).tz(this.cityWeather!.city.timeZone!).format('HH:mm');
  }

}
