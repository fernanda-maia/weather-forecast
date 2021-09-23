import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderLayout } from './header/header.layout';
import { ErrorTemplate } from './error/error.template';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '../material/material.module';
import { EmptyStateTemplate } from './empty-state/empty-state.template';
import { DetailsWeatherComponent } from './details-weather/details-weather.component';
import { CitiesTypeaheadComponent } from './cities-typeahead/cities-typeahead.component';
import { WeatherDetailsRowComponent } from './weather-details-row/weather-details-row.component';


@NgModule({
  declarations: [
    HeaderLayout,
    ErrorTemplate,
    LoaderComponent,
    EmptyStateTemplate,
    DetailsWeatherComponent,
    CitiesTypeaheadComponent,
    WeatherDetailsRowComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderLayout,
    ErrorTemplate,
    LoaderComponent,
    EmptyStateTemplate,
    DetailsWeatherComponent,
    CitiesTypeaheadComponent,
    WeatherDetailsRowComponent
  ]
})
export class ComponentsModule { }
