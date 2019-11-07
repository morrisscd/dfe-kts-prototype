import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from './results.model';

@Injectable({providedIn: 'root'})
export class ResultsService {

 $searchType = new EventEmitter();

 private results: Results[] = [];

 constructor(private http: HttpClient) {}

 getResults() {
    this.http.get<{message: string, results: Results[]}>("http://localhost:3000/api/results")
      .subscribe((resultsData) => {
        this.results =  resultsData.results;
      });
 }

}
