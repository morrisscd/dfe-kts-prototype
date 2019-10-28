import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchSchoolComponent } from './search/search-school/search-school.component';
import { SearchLAComponent } from './search/search-la/search-la.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchSchoolComponent,
    SearchLAComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
