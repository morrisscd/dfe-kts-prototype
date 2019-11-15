import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../results.service';


@Component({
  selector: 'app-results-list-detail',
  templateUrl: './results-list-detail.component.html',
  styleUrls: ['./results-list-detail.component.css']
})
export class ResultsListDetailComponent implements OnInit {

  pupilDataDetail: any;

  constructor(public resultsService: ResultsService) {}

  ngOnInit() {
    //this.resultsService.getResults()
     //.subscribe(data => this.pupilDataDetail = data);
  }

}
