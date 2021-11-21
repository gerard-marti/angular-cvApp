import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../../../services/messages.service";
import {Observable} from "rxjs";
import {SessionStorageService} from "../../../services/sessionStorage.service";

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['studies.component.scss']
})
export class StudiesComponent implements OnInit {

  officialStudies: any[] = [];
  unOfficialStudies: any[] = [];

  //Internationalization
  sessionStorageObservable: Observable<any> = this.ss.watchStorage();
  tab1Title: string = this.ms.transaltions.studies.officialStudies;
  tab2Title: string = this.ms.transaltions.studies.unOfficialStudies;
  readMoreText: string = this.ms.transaltions.general.readMore;
  masterTitle: string = this.ms.transaltions.studies.masterTitle;
  degreeTitle: string = this.ms.transaltions.studies.degreeTitle;

  constructor(private ms: MessagesService,
              private ss: SessionStorageService) { }

  ngOnInit(): void {
    this.updateTexts();
    this.sessionStorageObservable.subscribe(() => this.updateTexts());
  }


  updateTexts() {
    this.tab1Title = this.ms.transaltions.studies.officialStudies;
    this.tab2Title = this.ms.transaltions.studies.unOfficialStudies;
    this.readMoreText = this.ms.transaltions.general.readMore;
    this.masterTitle = this.ms.transaltions.studies.masterTitle;
    this.degreeTitle = this.ms.transaltions.studies.degreeTitle;

    this.officialStudies = [
      {status: this.ms.transaltions.studies.masterTitle, date: '2019 - 2021', center:'Universitat Oberta de Catalunya',
        icon: 'fas fa-user-lock', color: '#1b98a6', image: 'assets/studies/uoc.jpg', readMore: 'https://estudios.uoc.edu/es/masters-universitarios/ciberseguridad-privacidad/presentacion'},
      {status: this.ms.transaltions.studies.degreeTitle, date: '2013 - 2018', center: 'Universitat Rovira i Virgili',
        icon: 'fas fa-laptop-code', color: '#673AB7', image: 'assets/studies/urv-bandera-color.png'},
      {status: this.ms.transaltions.studies.degreeTitle, date: '2017 - 2018', center: 'FIT ČVUT v Praze',
        icon: 'fas fa-laptop-code', color: '#0202a8', image: 'assets/studies/CVUT_logo.jpg'},
      {status: this.ms.transaltions.studies.bachelorTitle, date: '2011 - 2013', center: 'Fundació Escola Teresiana',
        icon: 'fas fa-chalkboard-teacher', color: '#07a802', image: 'assets/studies/logo-fet-home.png'}
    ]
    this.unOfficialStudies = [
      {status: this.ms.transaltions.studies.unOfficialStudyTitle1, date: '11/2021', center:'Udemy',
        icon: 'fab fa-angular', color: '#ed0707', image: 'assets/studies/Udemy_logo.svg', readMore: 'https://www.udemy.com/certificate/UC-be20a6c7-123d-461f-b667-7fa060601a99/'}
    ]

  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  }
