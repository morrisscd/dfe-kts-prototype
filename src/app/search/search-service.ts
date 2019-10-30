import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Subject } from 'rxjs';
//import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class SearchService {
 //private posts: Post[] = [];
 //private postsUpdated = new Subject<Post[]>();

 constructor(private http: HttpClient) {}
  
 searchType = 'Search for pupil information';

 selectSearchType(data: string) {
    //console.log(data);
    this.searchType = data;
 }

}
