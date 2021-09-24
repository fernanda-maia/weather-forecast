import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { getBg } from 'src/app/shared/utils/consts/background';
import { CityWeather } from 'src/app/shared/models/weather.model';
import { unitToSymbol } from 'src/app/shared/utils/units.utils';


@Component({
  selector: 'app-current-weather-details',
  templateUrl: './current-weather-details.component.html',
  styleUrls: ['./current-weather-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentWeatherDetailsComponent  {
  @Input() current: CityWeather;
  @Input() unit: string;
  
  get getTitle(): string {
    return `${this.current?.city.name} - ${this.current?.city.country}`
  }

  get imageURL(): string {
    const icon = this.current?.weather.icon.split('.')[0] ?? 'default';
    const url = getBg(icon);
    return url;
  }

  get weatherIcon(): string {
    return `http://openweathermap.org/img/wn/${ this.current!.weather.icon }@2x.png`;
  }

  get temperature(): string {
    return `${this.current?.weather.temp.toFixed(1)} ${unitToSymbol(this.unit)}`;
  }

}
