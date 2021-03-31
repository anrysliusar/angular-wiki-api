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
    const formTerm = this.contactForm.value.name;
    this.definitionEmitter.emit(formTerm);

    if (!localStorage.length) {
      localStorage.setItem(`term${localStorage.length}`, formTerm);
      return;
    }

    if (!this.options.includes(formTerm)) {
      localStorage.setItem(`term${localStorage.length}`, formTerm);
    }
  }

  onChangeFormComplete(): void {
    this.suitableOptions = [];
    this.options = this.getDataFromLocalStorage();
    for (const option of this.options) {
      if (option.toLowerCase().includes(this.contactForm.value.name.toLowerCase())) {
        this.suitableOptions.push(option);
      }
    }
  }

  getDataFromLocalStorage(): string[] {
    const array = [];
    for (let i = 0; i < localStorage.length; i++) {
      array.push(localStorage.getItem(`term${i}`));
    }
    return array;
  }
}
