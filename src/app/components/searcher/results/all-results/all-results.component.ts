import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../../../../models/result';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.css']
})
export class AllResultsComponent implements OnInit {
  title = 'Results';

  @Input()
  resultsIn: Result[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
