import { createFeatureSelector, createSelector, MemoizedSelector } from "@ngrx/store";
import { BookmarksState } from "./bookmarks.reducer";


export const selectBookmarksState = createFeatureSelector('bookmarks') as MemoizedSelector <object, BookmarksState>;

export const selectBookmarksList = createSelector(
    selectBookmarksState,
    (state: BookmarksState) => state.list
)