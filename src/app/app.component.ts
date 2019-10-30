import { Component } from '@angular/core';
import { SearchService } from 'src/app/search/search-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dfe-kts-prototype';
  
  constructor(public searchService: SearchService) {}

  

}
