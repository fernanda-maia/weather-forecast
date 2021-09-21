import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DetailsGuard } from './services/details.guard';
import { DetailsPage } from './containers/details/details.page';
import { detailsReducer } from './state/details.reducer';


@NgModule({
  declarations: [
    DetailsPage
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('details', detailsReducer),
    RouterModule.forChild([
      {
        path: '',
        component: DetailsPage,
        canActivate: [DetailsGuard]
      }
    ])
  ],
  providers: [DetailsGuard]
})
export class DetailsModule { }
