import { createAction, props } from "@ngrx/store";


export const updateUnit = createAction(
    '[Unit] Update Unit',
    props<{ unit: string }>()
);