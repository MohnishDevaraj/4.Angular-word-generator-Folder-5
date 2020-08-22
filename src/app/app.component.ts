import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import arrayCountries from '../utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;

  n = 1;
  countries = '';

  handleSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generator() {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }

  /* Assignment */
  generateCountries() {
    this.n = Math.floor(Math.random() * 16) + 1;
    this.countries = arrayCountries.slice(0, this.n).join(' ');
  }
}

/*
You have to install: npm install bootstrap
If app-routing.module.ts is there initialy, then it means that routing is installed initally
Assignment was given for countries:
utils/countries.ts
app.component.ts: generateCountries
for words input was given as limit but in the assignment
I have given it as random numbers
*/
