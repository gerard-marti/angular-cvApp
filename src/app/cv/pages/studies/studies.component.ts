import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import {Observable} from "rxjs";
import {SessionStorageService} from "../../../services/sessionStorage.service";
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['studies.component.scss']
  // styles: [
  // ]
})
export class StudiesComponent implements OnInit {

  events1: any[] = [];

  //Internationalization
  sessionStorageObservable: Observable<any> = this.ss.watchStorage();
  tab1Title: string = this.ms.transaltions.general.officialStudies;
  tab2Title: string = this.ms.transaltions.general.unOfficialStudies;

  constructor(private ms: MessagesService,
              private ss: SessionStorageService) { }

  ngOnInit(): void {
    this.events1 = [
      {status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},
      {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
      {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
      {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
    ];
    this.updateTexts();
    this.sessionStorageObservable.subscribe(() => this.updateTexts());
  }


  updateTexts() {
    this.tab1Title = this.ms.transaltions.general.officialStudies;
    this.tab2Title = this.ms.transaltions.general.unOfficialStudies;

  }

  }
