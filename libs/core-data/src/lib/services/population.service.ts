import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data, Population } from "@us-population/api-interfaces";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


const BASE_URL = 'https://datausa.io/';
const MODEL = 'api/data?drilldowns=Nation&measures=Population';



@Injectable({
  providedIn: 'root'
})
export class PopulationService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Data[]> {
    return this.http.get<Population>(this.getUrl()).pipe(
      map((response) => response.data)
    );
  };

  getOne(id: number): Observable<Data> {
    return this.http.get<Data>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
