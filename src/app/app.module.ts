import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AllResultsComponent } from './components/results/all-results/all-results.component';
import { ResultComponent } from './components/results/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    AllResultsComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
