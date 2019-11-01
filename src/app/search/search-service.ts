import { Injectable, Input, Output, EventEmitter } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { Subject } from 'rxjs';
//import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class SearchService {
 $searchType = new EventEmitter();


 getSearchType(data: string){
    // console.log(data);
     this.$searchType.emit(data);
 }

 //private posts: Post[] = [];
 //private postsUpdated = new Subject<Post[]>();

 //constructor(private http: HttpClient) {}
}
