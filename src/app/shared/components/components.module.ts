import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorTemplate } from './error/error.template';
import { LoaderComponent } from './loader/loader.component';
import { DetailsWeatherComponent } from './details-weather/details-weather.component';
import { HeaderLayout } from './header/header.layout';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderLayout,
    ErrorTemplate,
    LoaderComponent,
    DetailsWeatherComponent,
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
    DetailsWeatherComponent
  ]
})
export class ComponentsModule { }
