import { Action, createReducer, on } from '@ngrx/store';
import { Bookmark } from 'src/app/shared/models/bookmark.model';

import * as fromBookmarksActions from '../state/bookmarks.actions';
import * as fromHomeActions from 'src/app/pages/home/state/home.actions';


export interface BookmarksState {
    list: Bookmark[];
}

export const bookmarkInitialState: BookmarksState = {
    list: []
}

export const reducer = createReducer(
    bookmarkInitialState,
    on(fromHomeActions.toggleBookmark, (state, { entity }) => ({
        ...state,
        list: toggleBookmark(state.list, entity)
    })),
    on(fromBookmarksActions.removeBookmarks, (state, { id }) => ({
        ...state,
        list: state.list.filter((b) => b.id !== id)
    }))
);

export function bookmarkReducer(state: BookmarksState | undefined, action: Action): BookmarksState {
    return reducer(state, action);
}

export function toggleBookmark(list: Bookmark[], entity: Bookmark) {
    const foundBk = list.filter((b) => b.id !== entity.id);

    return foundBk.length === list.length? 
        [...list, entity] :
        foundBk;
}