import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchTypeComponent } from './search/search-type/search-type.component';
import { HeaderComponent } from './header/header.component';
import { LinksComponent } from './links/links.component';
import { SearchParametersComponent } from './search/search-parameters/search-parameters.component';
import { ResultsListComponent } from './results/results-list/results-list.component';
import { ResultsListDetailComponent } from './results/results-list-detail/results-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchTypeComponent,
    HeaderComponent,
    LinksComponent,
    SearchParametersComponent,
    ResultsListComponent,
    ResultsListDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
