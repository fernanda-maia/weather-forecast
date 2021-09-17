import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


@Component({
  selector: 'app-details-weather',
  templateUrl: './details-weather.component.html',
  styleUrls: ['./details-weather.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsWeatherComponent {

  @Input() icon: string;
  @Input() infoType: string;
  @Input() info: unknown;

  get iconURL(): string {
    return `assets/images/icons/${this.icon}`;
  }

}