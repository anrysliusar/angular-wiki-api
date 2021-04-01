import { Component, OnInit } from '@angular/core';
import {WikiService} from '../../../services/wiki.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  results = [];

  constructor(private wikiService: WikiService) { }

  ngOnInit(): void {
  }

  getResultsByDefinition(definition: string): void {
    this.wikiService
      .search(definition)
      .subscribe(value => {
        this.results = value.query.search;
      });
  }
}
