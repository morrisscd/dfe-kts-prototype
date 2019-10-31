import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-type',
  templateUrl: './search-type.component.html',
  styleUrls: ['./search-type.component.css']
})
export class SearchTypeComponent implements OnInit {

  constructor() { }

  searchType: string = "hello there!"; 

 // @Output() messageEvent = new EventEmitter<string>();

 sendMessage() {
  //  this.messageEvent.emit(thismessage)
 }

 ngOnInit() {
   
 }

}
