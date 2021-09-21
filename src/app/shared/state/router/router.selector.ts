import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { RouterState } from "./router.reducer";


const selectRouterReducerState = createFeatureSelector<RouterReducerState<RouterState>>('router')

export const selectRouterState = createSelector(
    selectRouterReducerState,
    (router: RouterReducerState<RouterState>) => router?.state || {}
)

export const selectRouterQueryParams = createSelector(
    selectRouterState,
    (state: RouterState) => state?.queryParams || {}
)