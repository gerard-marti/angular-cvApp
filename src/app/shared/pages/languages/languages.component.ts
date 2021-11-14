import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styles: [`
    .changeLanguage {
      cursor: pointer;
    }
    .languageSelected{
      cursor: auto;
      opacity: 50%;
    }


  `]
})
export class LanguagesComponent implements OnInit {

  selectedLanguage: string = 'cat';

  constructor() { }

  ngOnInit(): void {
  }

  changeLanguage(language: string) {
    if(language != this.selectedLanguage) {
      this.selectedLanguage = language;
    }
  }

}
