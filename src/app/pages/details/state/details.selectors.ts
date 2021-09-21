import { createFeatureSelector, createSelector } from "@ngrx/store";

import { DetailsState } from "./details.reducer";


export const selectDetailsState = createFeatureSelector<DetailsState>('details');

export const selectDetailsEntity = createSelector(
    selectDetailsState,
    (details: DetailsState) => details.entity
);

export const selectDetailsLoading = createSelector(
    selectDetailsState,
    (details: DetailsState) => details.loading
);

export const selectDetailsError = createSelector(
    selectDetailsState,
    (details: DetailsState) => details.error
);