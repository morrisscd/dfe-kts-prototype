import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-list-detail',
  templateUrl: './results-list-detail.component.html',
  styleUrls: ['./results-list-detail.component.css']
})
export class ResultsListDetailComponent implements OnInit {

  pupilDataDetail: any;

  constructor() {
    this.pupilDataDetail = [
      {
        firstName: 'Robert',
        surname: 'Smith',
        dob: '01/02/2007',
        gender: 'M',
        datasets: [
          'CTF XML',
          'Year 1 Phonics',
          'KS1',
          'KS2'
        ]
      },
      {
        firstName: 'Sally',
        surname: 'Green',
        dob: '02/03/2008',
        gender: 'F',
        datasets: [
          'CTF XML',
          'KS1',
          'KS2',
          'KS3'
        ]
      },
      {
        firstName: 'David',
        surname: 'Black',
        dob: '03/06/2008',
        gender: 'M',
        datasets: [
          'CTF XML',
          'KS1'
        ]
      }];
  }

  ngOnInit() {
  }

}
