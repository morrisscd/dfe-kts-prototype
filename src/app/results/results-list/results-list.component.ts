import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultsService } from '../results.service';


@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  constructor(public resultsService: ResultsService) {}

  ngOnInit() {
    this.resultsService.getResults();
  }

}
