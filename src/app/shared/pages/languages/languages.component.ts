import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import {SessionStorageService} from "../../../services/sessionStorage.service";

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

  constructor(private ms: MessagesService, private ss: SessionStorageService) {
    if(sessionStorage.getItem('selectedLanguage')){
      this.selectedLanguage = sessionStorage.getItem('selectedLanguage')!;
    } else {
      this.ss.setItem('selectedLanguage', this.selectedLanguage)
    }
  }

  ngOnInit(): void {
  }

  changeLanguage(language: string) {
    if(language != this.selectedLanguage) {
      this.selectedLanguage = language;
      this.ss.setItem('selectedLanguage', this.selectedLanguage)
    }
  }

}
