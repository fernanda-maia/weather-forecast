import { Component, Input } from '@angular/core';
import { CityWeather } from '../../models/weather.model';

import * as moment from 'moment-timezone';
import { unitToSymbol } from '../../utils/units.utils';


@Component({
  selector: 'app-weather-details-row',
  templateUrl: './weather-details-row.component.html',
  styleUrls: ['./weather-details-row.component.css']
})
export class WeatherDetailsRowComponent {

  @Input() unit: string;
  @Input() cityWeather: CityWeather | undefined;
  @Input() moreInfo?: boolean;


  unixToMinute(value: number): string {
    return moment.unix(value).tz(this.cityWeather!.city.timeZone!).format('HH:mm');
  }

  getTemperature(temp: number): string {
      return `${temp.toFixed(1)} ${unitToSymbol(this.unit)}`;
  }

}
