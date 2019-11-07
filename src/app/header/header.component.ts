import { Component, OnInit } from '@angular/core';
import { SearchService } from '../results/results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  searchType(data: string){
   //console.log(data);
    this.searchService.getSearchType(data);
  }

}
