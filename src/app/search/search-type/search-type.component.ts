import { Component, OnInit } from '@angular/core';
//import { SearchService } from '../../results/results.service';

@Component({
  selector: 'app-search-type',
  templateUrl: './search-type.component.html',
  styleUrls: ['./search-type.component.css']
})
export class SearchTypeComponent implements OnInit {

  searchType = "Search for pupil information (School)";

  constructor(private searchService: SearchService ) { }
  //searchType: string = "hello there!";
  // @Output() messageEvent = new EventEmitter<string>();
 ngOnInit() {
   this.searchService.$searchType
    .subscribe((data) => {
      this.searchType = data;
      console.log(data);
    })

 }

}
