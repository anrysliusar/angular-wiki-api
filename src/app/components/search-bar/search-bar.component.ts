import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  definition = new FormControl();
  contactForm = new FormGroup({
    name: this.definition
  });
  @Output()
  definitionEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  contactFormSubmit(): void {
    this.definitionEmitter.emit(this.contactForm.value.name);
  }

}
