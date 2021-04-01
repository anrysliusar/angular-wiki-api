import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchBarComponent} from './components/searcher/search-bar/search-bar.component';
import { ReactiveFormsModule} from '@angular/forms';
import {AllResultsComponent} from './components/searcher/results/all-results/all-results.component';
import {ResultComponent} from './components/searcher/results/result/result.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {SearcherComponent} from './components/searcher/searcher/searcher.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';

const routes = [
  {
    path: 'search', component: SearcherComponent
  },
  {
    path: 'about', component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    AllResultsComponent,
    ResultComponent,
    AboutComponent,
    SearcherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
