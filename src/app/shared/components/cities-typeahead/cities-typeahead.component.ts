import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CitiesService } from '../../services/cities.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-cities-typeahead',
  templateUrl: './cities-typeahead.component.html',
  styleUrls: ['./cities-typeahead.component.css']
})
export class CitiesTypeaheadComponent implements OnInit, OnDestroy {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  
  @Output() search = new EventEmitter();
  
  searchedItem: string[];
  subscription: Subscription;
  autocomplete: boolean = true;

  constructor(private service: CitiesService) {
    this.searchedItem = []
  }

  ngOnInit(): void {
    this.subscription = this.formGroup.controls[this.controlName]
            .valueChanges
            .pipe(
              debounceTime(200),
              distinctUntilChanged(),
              switchMap(s => this.service.getCities(s))
            )
          .subscribe(response => {
            this.searchedItem = response.map(i => `${i.name}, ${i.country}`)
            return this.searchedItem;
          });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  doSearch(): void {
    this.search.emit();
  }

  toggleAutoComplete(): void {
    this.autocomplete = !this.autocomplete;
  }

}
