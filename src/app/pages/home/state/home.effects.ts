import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import { map ,catchError, mergeMap, withLatestFrom } from 'rxjs/operators';

import { WeatherService } from 'src/app/shared/services/weather.service';

import * as fromHomeActions from './home.actions';


@Injectable()
export class HomeEffects {
    loadCurrentWeather$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromHomeActions.loadCurrentWeather),
            mergeMap(({ query }) => this.weatherService.getCityWeatherByQuery(query)),
            catchError((err, caughts) => {
                this.store.dispatch(fromHomeActions.loadCurrentWeatherFailed())
                return caughts;
            }),
            map((entity: any) => fromHomeActions.loadCurrentWeatherSuccess(entity))
        )
    );

    constructor(private actions$: Actions,
                private store: Store,
                private weatherService: WeatherService) {

    }
}