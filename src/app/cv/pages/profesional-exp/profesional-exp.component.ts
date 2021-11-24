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
  dialogHeader: string = '';
  dialogContent: string = '';
  dialogContentIdiada1: string = '';
  dialogContentVW: string = '';
  displayDialog: boolean = false;

  //Internationalization
  sessionStorageObservable: Observable<any> = this.ss.watchStorage();
  readMoreText: string = this.ms.transaltions.general.readMore;

  constructor(private ms: MessagesService,
              private ss: SessionStorageService) { }

  ngOnInit(): void {
    this.updateTexts();
    this.sessionStorageObservable.subscribe(() => this.updateTexts());
  }

  updateTexts() {
    this.readMoreText = this.ms.transaltions.general.readMore;
    this.dialogContentIdiada1 = this.ms.transaltions.professionalExp.dialogContentIdiada;
    this.dialogContentVW = this.ms.transaltions.professionalExp.dialogContentVW;
    this.experience = [
      {status: 'Senior Software Developer', date: '01/2022 - Act.', center:'Applus+ Idiada',
        icon: 'fas fa-laptop-code', color: '#fc6a21', image: 'assets/studies/Applus+_IDIADA_Logo.svg.png'},
      {status: 'Senior Software Developer', date: '06/2021 - 12/2021', center:'Volkswagen Group Services', dialogContent: this.dialogContentVW,
        icon: 'fas fa-laptop-code', color: '#1b98a6', image: 'assets/studies/1524492195555.jfif'},
      {status: 'Software Developer & Automotive Cybersecurity Engineer', date: '07/2018 - 06/2021', center:'Applus+ Idiada', dialogContent: this.dialogContentIdiada1,
        icon: 'fas fa-laptop-code', color: '#fc6a21', image: 'assets/studies/Applus+_IDIADA_Logo.svg.png'},
    ]
  }

  setVariables(experience: any) {
    this.dialogContent = experience.dialogContent;
    this.dialogHeader = experience.center+' | '+experience.date;
    this.displayDialog = true;
  }
}
