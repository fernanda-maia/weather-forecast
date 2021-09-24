import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderLayout } from './header/containers/header/header.layout';
import { ErrorTemplate } from './error/error.template';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '../material/material.module';
import { EmptyStateTemplate } from './empty-state/empty-state.template';
import { DetailsWeatherComponent } from './details-weather/details-weather.component';
import { CitiesTypeaheadComponent } from './cities-typeahead/cities-typeahead.component';
import { WeatherDetailsRowComponent } from './weather-details-row/weather-details-row.component';
import { NavUnitSelectorComponent } from './header/containers/nav-unit-selector/nav-unit-selector.component';


@NgModule({
  declarations: [
    HeaderLayout,
    ErrorTemplate,
    LoaderComponent,
    EmptyStateTemplate,
    DetailsWeatherComponent,
    CitiesTypeaheadComponent,
    WeatherDetailsRowComponent,
    NavUnitSelectorComponent,
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
