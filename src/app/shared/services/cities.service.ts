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
    
    httpParams = httpParams.set("q", query);
    httpParams = httpParams.set("_page", "1");
    httpParams = httpParams.set("_limit", "200");
    httpParams = httpParams.set("_sort", "country");

    return this.httpClient.get<CityTypeaheadItem[]>(baseURL, {params: httpParams});
  }
}
