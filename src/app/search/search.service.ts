import { Injectable, Input, Output, EventEmitter } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Results } from './search.model';

@Injectable({providedIn: 'root'})
export class ResultsService {

 $searchType = new EventEmitter();

 //private results: Results[] = [];

 constructor() {}

 getSearchType(data: string) {
     this.$searchType.emit(data);
 }

}
