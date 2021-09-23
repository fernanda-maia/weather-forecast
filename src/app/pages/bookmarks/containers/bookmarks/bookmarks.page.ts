import { Store, select } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
  filteredBookmark: Bookmark[];
  searchForm: FormGroup;
  searched: boolean;

  constructor(private store: Store,
              private formBuilder: FormBuilder) { 
      this.searched = false; 
  }

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
      this.searched = true;
      const query = this.searchForm.getRawValue().value;

      this.bookmarks$.subscribe(
        (b: Bookmark[]) => (
          this.filteredBookmark = b.filter(i => i.name.toUpperCase().match(query.toUpperCase()))
        )
      )
    } else {
      this.searched = false;
    }
  }

  image(code: string): string {
    return getCityImage(code);
  }
}