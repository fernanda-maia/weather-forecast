import { select, Store } from '@ngrx/store';
import { Component, Input, OnInit, HostListener } from '@angular/core';

import { Observable } from 'rxjs';

import { Units } from 'src/app/shared/models/units.enum';
import { AppState } from 'src/app/shared/state/app.reducer';

import * as fromHomeActions from 'src/app/pages/home/state/home.actions';
import * as fromConfigActions from 'src/app/shared/state/config/config.actions';
import * as fromConfigSelectors from 'src/app/shared/state/config/config.selectors'
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-nav-unit-selector',
  templateUrl: './nav-unit-selector.component.html',
  styleUrls: ['./nav-unit-selector.component.css']
})
export class NavUnitSelectorComponent implements OnInit {

  @Input() formGroup: FormGroup;

  unitsEnum = Units;
  unit: string;
  scrolled = 0;

  units$: Observable<string>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.units$ = this.store.pipe(select(fromConfigSelectors.selectConfigUnit));
    this.units$.subscribe((u) => this.unit = u)
  }

  updateUnit(value: string): void {
    this.store.dispatch(fromConfigActions.updateUnit({ unit: value }));

    if(this.formGroup.valid) {
      const query = this.formGroup.getRawValue().value
      this.store.dispatch(fromHomeActions.loadCurrentWeather({ query }));

    }
  }

}