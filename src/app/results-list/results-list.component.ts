import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

  pupilData: any;

  constructor() {
    this.pupilData = [
      {
        firstName: 'Robert',
        surname: 'Smith',
        dob: '01/02/2007',
        gender: 'M'
      },
      {
        firstName: 'Sally',
        surname: 'Green',
        dob: '02/03/2008',
        gender: 'F'
      }];
  }

  ngOnInit() {
  }

}
