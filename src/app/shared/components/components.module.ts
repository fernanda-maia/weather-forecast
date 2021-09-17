import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorTemplate } from './error/error.template';
import { LoaderComponent } from './loader/loader.component';
import { DetailsWeatherComponent } from './details-weather/details-weather.component';


@NgModule({
  declarations: [
    ErrorTemplate,
    LoaderComponent,
    DetailsWeatherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorTemplate,
    LoaderComponent,
    DetailsWeatherComponent
  ]
})
export class ComponentsModule { }
