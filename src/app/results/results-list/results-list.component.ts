import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  constructor(public resultsService: ResultsService) {}

  pupilData: any;

  ngOnInit() {
    console.log('getting results');
    //console.log(this.resultsService.getResults());
    this.resultsService.getResults()
     .subscribe(data => this.pupilData = data);
  
  }

}
