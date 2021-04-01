import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  private options = [];
  suitableOptions = [];
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
    if (this.contactForm.value.name === null) {
      alert('Wrong input!');
      return;
    }

    this.options = this.getDataFromLocalStorage();
    const formDefinition = this.contactForm.value.name;
    this.definitionEmitter.emit(formDefinition);


    // for autocomplete
    if (!localStorage.length) {
      localStorage.setItem(`term${localStorage.length}`, formDefinition);
      return;
    }

    if (!this.options.includes(formDefinition)) {
      localStorage.setItem(`term${localStorage.length}`, formDefinition);
    }
  }

  // for autocomplete
  onChangeFormComplete(): void {
    this.suitableOptions = [];
    this.options = this.getDataFromLocalStorage();
    for (const option of this.options) {
      if (option.toLowerCase().includes(this.contactForm.value.name.toLowerCase())) {
        this.suitableOptions.push(option);
      }
    }
  }

  // for autocomplete
  getDataFromLocalStorage(): string[] {
    const array = [];
    for (let i = 0; i < localStorage.length; i++) {
      array.push(localStorage.getItem(`term${i}`));
    }
    return array;
  }
}
