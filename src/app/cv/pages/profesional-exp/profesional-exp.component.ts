import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {MessagesService} from "../../../services/messages.service";
import {SessionStorageService} from "../../../services/sessionStorage.service";

@Component({
  selector: 'app-profesional-exp',
  templateUrl: './profesional-exp.component.html',
  styleUrls: ['profesional-exp.component.scss']
})
export class ProfesionalExpComponent implements OnInit {

  experience: any[] = [];
  volunteering: any[] = [];
  dialogHeader: string = '';
  dialogContent: string = '';
  dialogContentIdiadaSD: string = '';
  dialogContentIdiadaACE: string = '';
  dialogContentVW: string = '';
  displayDialog: boolean = false;

  //Internationalization
  sessionStorageObservable: Observable<any> = this.ss.watchStorage();
  readMoreText: string = this.ms.transaltions.general.readMore;
  tab1Title: string = this.ms.transaltions.professionalExp.careerPath;
  tab2Title: string = this.ms.transaltions.professionalExp.volunteering;

  constructor(private ms: MessagesService,
              private ss: SessionStorageService) { }

  ngOnInit(): void {
    this.updateTexts();
    this.sessionStorageObservable.subscribe(() => this.updateTexts());
  }

  updateTexts() {
    this.readMoreText = this.ms.transaltions.general.readMore;
    this.dialogContentIdiadaSD = this.ms.transaltions.professionalExp.dialogContentIdiadaSD;
    this.dialogContentIdiadaACE = this.ms.transaltions.professionalExp.dialogContentIdiadaACE;
    this.dialogContentVW = this.ms.transaltions.professionalExp.dialogContentVW;
    this.tab1Title = this.ms.transaltions.professionalExp.careerPath;
    this.tab2Title = this.ms.transaltions.professionalExp.volunteering;
    this.experience = [
      {status: 'Senior Software Developer', date: '01/2022 - Act.', center:'Applus+ Idiada',
        icon: 'fas fa-laptop-code', color: '#fc6a21', image: 'assets/experience/Applus+_IDIADA_Logo.svg.png'},
      {status: 'Senior Software Developer', date: '06/2021 - 12/2021', center:'Volkswagen Group Services', dialogContent: this.dialogContentVW,
        icon: 'fas fa-laptop-code', color: '#1b98a6', image: 'assets/experience/1524492195555.jfif'},
      {status: ' Automotive Cybersecurity Engineer', date: '11/2020 - 06/2021', center:'Applus+ Idiada', dialogContent: this.dialogContentIdiadaACE,
        icon: 'fas fa-laptop-code', color: '#fc6a21', image: 'assets/experience/Applus+_IDIADA_Logo.svg.png'},
      {status: 'Software Developer', date: '07/2018 - 11/2020', center:'Applus+ Idiada', dialogContent: this.dialogContentIdiadaSD,
        icon: 'fas fa-laptop-code', color: '#fc6a21', image: 'assets/experience/Applus+_IDIADA_Logo.svg.png'},
    ]
    this.volunteering = [
      {status: 'Software Engineer', date: '03/2019 - 12/2019', center: 'Formula Student Spain',
       icon: 'fas fa-car', color: 'white', image: 'assets/experience/fss.png',
        appUrl: 'https://play.google.com/store/apps/details?id=es.formulastudent'}
    ]
  }

  setVariables(experience: any) {
    this.dialogContent = experience.dialogContent;
    this.dialogHeader = experience.center + ' | ' + experience.date;
    this.displayDialog = true;
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
