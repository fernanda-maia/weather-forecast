import { select, Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { combineLatest, Observable, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

import * as fromHomeActions from '../../state/home.actions';
import * as fromHomeSelectors from '../../state/home.selectors';
import * as fromBookmarksSelectors from 'src/app/pages/bookmarks/state/bookmarks.selectors';

import { Bookmark } from 'src/app/shared/models/bookmark.model';
import { CityWeather } from 'src/app/shared/models/weather.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit, OnDestroy {
  private componentDestroyed$ = new Subject();

  searchForm: FormGroup;

  cityWeather: CityWeather;
  cityWeather$: Observable<CityWeather>;

  error$: Observable<boolean>;
  loading$: Observable<boolean>;

  bookmarkList$: Observable<Bookmark[]>;
  isFavorite$: Observable<boolean>;

  constructor(private store: Store,
              private formBuilder: FormBuilder) {
    
  }
  
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      value: ['', Validators.required]
    })

    this.cityWeather$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeather));

    this.cityWeather$
        .pipe(takeUntil(this.componentDestroyed$))
        .subscribe(value => this.cityWeather = value);

    this.loading$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelectors.selectCurrentWeatherError));

    this.bookmarkList$ = this.store.pipe(select(fromBookmarksSelectors.selectBookmarksList));

    this.isFavorite$ = combineLatest([this.cityWeather$, this.bookmarkList$])
      .pipe(
        map(([current, bookmarksList]) => {
          return !current? false : 
                  bookmarksList.some(b => b.id === current.city.id)
        })
      )

  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
    this.store.dispatch(fromHomeActions.clearHomeState());
  }

  doSearch(): void {
    if(this.searchForm.valid) {
      const query = this.searchForm.getRawValue().value;
      this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));
    }
  }

  onToggleBookmark() {
    const bookmark: Bookmark = {...this.cityWeather.city} as Bookmark
    this.store.dispatch(fromHomeActions.toggleBookmark({ entity: bookmark }));
  }

}
