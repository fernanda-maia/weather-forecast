import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';

import { homeReducer } from './state/home.reducer';
import { HomeEffects } from './state/home.effects';
import { HomePage } from './containers/home/home.page';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomePage,
    CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ComponentsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([HomeEffects]),
    StoreModule.forFeature('home', homeReducer),
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule { }
