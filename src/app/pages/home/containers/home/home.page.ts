import { select, Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as fromHomeActions from '../../state/home.actions';
import * as fromHomeSelectors from '../../state/home.selectors';
import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityWeather } from 'src/app/shared/models/weather.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit, OnDestroy {
  private componentDestroyed$ = new Subject();

  date: Date;
  searchControl: FormControl;

  error$: Observable<boolean>;
  loading$: Observable<boolean>;
  cityWeather: CityWeather;

  constructor(private store: Store) {
    this.date = new Date();
  }
  
  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date();
    }, 1000);

    this.searchControl = new FormControl('', Validators.required);

    this.store
        .pipe(select(fromHomeSelectors.selectCurrentWeather),
              takeUntil(this.componentDestroyed$))
        .subscribe(value => this.cityWeather = value);

    this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));

  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

  doSearch(): void {
    if(this.searchControl.valid) {
      const query = this.searchControl.value;
      this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));
    }
  }

  onToggleBookmark() {
    const bookmark: Bookmark = {...this.cityWeather.city} as Bookmark
  }

}
