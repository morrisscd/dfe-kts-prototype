import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from './results.model';

@Injectable({providedIn: 'root'})
export class ResultsService {

 $searchType = new EventEmitter();

 private results: Results[] = [];

 constructor(private http: HttpClient) {}

 getResults() {
    return this.http.get<Results[]>('http://localhost:3000/api/results')
 }

}
