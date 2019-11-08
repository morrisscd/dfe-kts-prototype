import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-type',
  templateUrl: './search-type.component.html',
  styleUrls: ['./search-type.component.css']
})
export class SearchTypeComponent implements OnInit {

  searchType = 'Search for pupil information (School)';

  constructor(private searchService: SearchService ) { }

 ngOnInit() {
   this.searchService.$searchType
    .subscribe((data) => {
      this.searchType = data;
      console.log(data);
    });
 }

}
