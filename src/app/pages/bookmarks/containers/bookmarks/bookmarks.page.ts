import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { Bookmark } from 'src/app/shared/models/bookmark.model';
import * as fromBookmarksActions from '../../state/bookmarks.actions';
import * as fromBookmarksSelectors from '../../state/bookmarks.selectors';
import { getCityImage } from 'src/app/shared/utils/consts/city';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.page.html',
  styleUrls: ['./bookmarks.page.css']
})
export class BookmarksPage implements OnInit {

  bookmarks$: Observable<Bookmark[]>;
  searchForm: FormGroup;

  constructor(private store: Store,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      value: ['', Validators.required]
    })

    this.bookmarks$ = this.store.pipe(select(fromBookmarksSelectors.selectBookmarksList));
  }

  removeBookmark(id: number) {
    this.store.dispatch(fromBookmarksActions.removeBookmarks({ id }));
  }

  doSearch(): void {
    if(this.searchForm.valid) {
      console.log(this.searchForm.getRawValue().value);
    }
  }

  image(code: string): string {
    return getCityImage(code);
  }
}