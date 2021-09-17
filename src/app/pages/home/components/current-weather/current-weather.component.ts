import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { getBg } from 'src/app/shared/utils/consts/background';
import { CityWeather } from 'src/app/shared/models/weather.model';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentWeatherComponent {
  @Input() cityWeather: CityWeather | null;
  @Output() toggleBookmark = new EventEmitter();

  get cityName(): string | undefined {
    return `${this.cityWeather?.city.name} - ${this.cityWeather?.city.country}`;
  }

  get temperature(): string {
    return `${this.cityWeather?.weather.temp}K`;
  }

  get image(): string {
    const icon = this.cityWeather?.weather.icon.split('.')[0];
    const url = getBg(icon!);

    return url;
  }

  public onToggleBookmark() {
    this.toggleBookmark.emit();
  }

}
