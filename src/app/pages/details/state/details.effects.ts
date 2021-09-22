import { Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { combineLatest } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { AppState } from 'src/app/shared/state/app.reducer';
import { WeatherService } from 'src/app/shared/services/weather.service';

import * as fromDetailsActions from './details.actions';
import * as fromRouterSelectors from 'src/app/shared/state/router/router.selector';


@Injectable()
export class DetailsEffects {
    loadCurrentWeather$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromDetailsActions.loadWeatherDetails),
            withLatestFrom(this.store.pipe(select(fromRouterSelectors.selectRouterQueryParams))),
            mergeMap(([, queryParams]: [any, Params]) => 
                combineLatest([
                    this.service.getCityWeatherByCoord(queryParams.lat, queryParams.lon),
                    this.service.getWeatherDetails(queryParams.lat, queryParams.lon)
                ])
            ),
            catchError((err, caught$) => {
                this.store.dispatch(fromDetailsActions.loadWeatherDetailsFailed());
                return caught$;
            }),
            map(([current, daily]) => {
                const entity = daily;
                entity.city = {...current.city, timeZone: daily.city.timeZone};
                return fromDetailsActions.loadWeatherDetailsSuccess({ entity} );
            }),
        )
    );

    constructor(private actions$: Actions,
                private store: Store<AppState>,
                private service: WeatherService) {

    }
}