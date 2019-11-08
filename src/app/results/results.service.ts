import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from './results.model';

@Injectable({providedIn: 'root'})
export class ResultsService {

 $searchType = new EventEmitter();

 private results: Results[] = [];

 constructor(private http: HttpClient) {}

 getResults() {
    this.http.get<Results[]>('http://localhost:3000/api/results')
      .subscribe((resultsData) => {
        console.log(resultsData);
        console.log('in get');
      });
 }

}
