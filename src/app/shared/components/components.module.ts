import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorTemplate } from './error/error.template';
import { LoaderComponent } from './loader/loader.component';
import { DetailsWeatherComponent } from './details-weather/details-weather.component';
import { HeaderLayout } from './header/header.layout';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmptyStateTemplate } from './empty-state/empty-state.template';


@NgModule({
  declarations: [
    HeaderLayout,
    ErrorTemplate,
    LoaderComponent,
    EmptyStateTemplate,
    DetailsWeatherComponent
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
    DetailsWeatherComponent
  ]
})
export class ComponentsModule { }
