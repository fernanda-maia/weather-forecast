import { createAction, props } from "@ngrx/store";


export const removeBookmarks = createAction(
    '[Bookmark] Remove Bookmark',
    props<{id: number}>()
)