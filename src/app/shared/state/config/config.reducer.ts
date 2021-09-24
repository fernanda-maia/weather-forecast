import { createReducer, on } from "@ngrx/store";
import { Units, UnitsInterface } from "../../models/units.enum";

import * as fromConfigActions from './config.actions';

export interface ConfigState {
    unit: string;
}

export const configInitialState: ConfigState = {
    unit: Units.Metric
}

export const configReducer = createReducer(
    configInitialState,
    on(fromConfigActions.updateUnit, (state, { unit }) => ({
        ...state,
        unit
    }))
);