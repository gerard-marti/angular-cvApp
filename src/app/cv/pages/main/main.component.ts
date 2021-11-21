import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import {SessionStorageService} from "../../../services/sessionStorage.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [`
    .about {
      margin: 0;
      text-indent: 2rem;
      text-align: justify;
    }
  `]
})
export class MainComponent implements OnInit {


  //Internationalization
  sessionStorageObservable: Observable<any> = this.ss.watchStorage();
  text1: string = this.ms.transaltions.summary.mainText1;
  text2: string = this.ms.transaltions.summary.mainText2;
  text3: string = this.ms.transaltions.summary.mainText3;
  text4: string = this.ms.transaltions.summary.mainText4;

  constructor(private ms: MessagesService,
              private ss: SessionStorageService) { }

  ngOnInit(): void {
    this.updateTexts();
    this.sessionStorageObservable.subscribe(() => this.updateTexts());
  }

  updateTexts() {
    this.text1 = this.ms.transaltions.summary.mainText1;
    this.text2 = this.ms.transaltions.summary.mainText2;
    this.text3 = this.ms.transaltions.summary.mainText3;
    this.text4 = this.ms.transaltions.summary.mainText4;
  }

}
