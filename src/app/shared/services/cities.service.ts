import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CityTypeaheadItem } from '../models/city-typeahead-item.model';


const baseURL = "http://localhost:3000/cities/"

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private httpClient: HttpClient) { 

  }

  getCities(query: string): Observable<CityTypeaheadItem[]> {
    let httpParams = new HttpParams();
    
    httpParams = httpParams.set("name_like", query);
    httpParams = httpParams.set("_page", "1");
    httpParams = httpParams.set("_limit", "120");
    httpParams = httpParams.set("_sort", "name");

    return this.httpClient.get<CityTypeaheadItem[]>(baseURL, {params: httpParams});
  }
}
