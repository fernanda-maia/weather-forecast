import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { getBg } from 'src/app/shared/utils/consts/background';
import { CityWeather } from 'src/app/shared/models/weather.model';
import { unitToSymbol } from 'src/app/shared/utils/units.utils';


@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentWeatherComponent {
  @Input() unit: string;
  @Input() cityWeather: CityWeather | null;
  @Input() isFavorite: boolean | null;
  @Output() toggleBookmark = new EventEmitter();

  get cityName(): string | undefined {
    return `${this.cityWeather?.city.name} - ${this.cityWeather?.city.country}`;
  }

  get cityParams() {
    const coord = this.cityWeather?.city.coord
    
    return {
      lat: coord!.lat,
      lon: coord!.lon
    }
  }

  get temperature(): string {
    return `${this.cityWeather?.weather.temp.toFixed(1)} ${unitToSymbol(this.unit)}`;
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
