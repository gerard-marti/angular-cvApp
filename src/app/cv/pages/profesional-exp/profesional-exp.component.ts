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
  dialogContent: string = '' +
    '<b>Software Developer (Jul 2018 - Nov 2020)</b>' +
    '<br>Desarrollo de aplicaciones web basadas en Java, usando metodologías ágiles como Scrum.' +
    '<br> También se ha desarrollado en React<br>' +
    '<br>Uso de diferentes tecnologías como:' +
    '<ul> <li> Springboot, struts</li>' +
    '<li> Primefaces</li>' +
    '<li> Git</li>' +
    '<li> Maven</li>' +
    '<li> Hibernate, Microsoft SQL</li>' +
    '<li> Entre otros</li></ul>' +
    '<br><b>Automotive Cybersecurity Engineer (Nov 2020 - Jun 2021)</b>' +
    '<br><ul><li>Automotive cybersecurity expert on ISO/SAE 21434.</li> ' +
    '<li>Gap Analysis, Threat Analysis Risk Assessment (TARA) and Cybersecurity Management System (CSMS). </li>' +
    '<li>Software Updates Management System (SUMS). </li>' +
    '<li>UN R.155 and UN R.156.</li>';
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
    this.experience = [
      {status: 'Senior Software Developer', date: '06/2021 - 12/2021', center:'Volkswagen Group Services',
        icon: 'fas fa-laptop-code', color: '#1b98a6', image: 'assets/studies/1524492195555.jfif', readMore: 'https://estudios.uoc.edu/es/masters-universitarios/ciberseguridad-privacidad/presentacion'},
      {status: 'Software Developer', date: '07/2018 - 06/2021', center:'Applus+ Idiada',
        icon: 'fas fa-laptop-code', color: '#fc6a21', image: 'assets/studies/Applus+_IDIADA_Logo.svg.png', readMore: 'https://estudios.uoc.edu/es/masters-universitarios/ciberseguridad-privacidad/presentacion'},
    ]
  }

}
