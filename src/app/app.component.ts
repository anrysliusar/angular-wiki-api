import {Component} from '@angular/core';
import {WikiService} from './services/wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wiki';
  results = [];

  constructor(private wikiService: WikiService) {
  }

  getDefinition(definition: string): void {
    this.wikiService
      .search(definition)
      .subscribe(value => {
        this.results = value.query.search;
        console.log(this.results);
      });
  }
}
