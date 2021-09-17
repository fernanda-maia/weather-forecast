import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';


export const selectHomeState = createFeatureSelector('home') as MemoizedSelector<object, HomeState>;

export const selectCurrentWeather = createSelector(
    selectHomeState,
    (state: HomeState) => state.entity 
);

export const selectCurrentWeatherLoading = createSelector(
    selectHomeState,
    (state: HomeState) => state.loading
);
export const selectCurrentWeatherError = createSelector(
    selectHomeState,
    (state: HomeState) => state.error 
);