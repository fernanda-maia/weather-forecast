import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsGuard } from './services/details.guard';
import { DetailsPage } from './containers/details/details.page';
import { detailsReducer } from './state/details.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DetailsEffects } from './state/details.effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { CurrentWeatherDetailsComponent } from './components/current-weather-details/current-weather-details.component';
import { DailyWeatherDetailsComponent } from './components/daily-weather-details/daily-weather-details.component';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    DetailsPage,
    CurrentWeatherDetailsComponent,
    DailyWeatherDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    StoreModule.forFeature('details', detailsReducer),
    EffectsModule.forFeature([DetailsEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: DetailsPage,
        canActivate: [DetailsGuard]
      }
    ])
  ],
  providers: [DetailsGuard]
})
export class DetailsModule { }
