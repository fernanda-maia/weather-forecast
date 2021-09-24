import { select, Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppState } from 'src/app/shared/state/app.reducer';
import { CityDailyWeather, CityWeather } from 'src/app/shared/models/weather.model';

import * as fromDetailsActions from '../../state/details.actions';
import * as fromDetailsSelectors from '../../state/details.selectors';
import * as fromUnitsSelectors from 'src/app/shared/state/config/config.selectors';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.css']
})
export class DetailsPage implements OnInit, OnDestroy {
  private componentDestroyed$ = new Subject();

  current: CityWeather;

  unit$: Observable<string>;
  error$: Observable<boolean>;
  loading$: Observable<boolean>;
  details$: Observable<CityDailyWeather | undefined>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromDetailsActions.loadWeatherDetails());

    this.error$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsError));
    this.details$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsEntity));
    this.loading$ = this.store.pipe(select(fromDetailsSelectors.selectDetailsLoading));

    this.details$.pipe(takeUntil(this.componentDestroyed$))
                 .subscribe((value) => value? this.current = {
                   city: value!.city, weather: value!.current
                } as CityWeather : undefined
    )
    
    this.unit$ = this.store.pipe(select(fromUnitsSelectors.selectConfigUnit));
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

}
