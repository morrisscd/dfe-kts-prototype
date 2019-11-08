import { Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SearchService {

 $searchType = new EventEmitter();

 constructor() {}

 getSearchType(data: string) {
     this.$searchType.emit(data);
 }

}
