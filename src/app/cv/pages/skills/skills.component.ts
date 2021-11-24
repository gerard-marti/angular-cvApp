import { Component, OnInit } from '@angular/core';
import {Skill} from "../../../shared/interfaces/shared.interface";
import {MessagesService} from "../../../services/messages.service";
import {SessionStorageService} from "../../../services/sessionStorage.service";
import {Observable} from "rxjs";
import {SortEvent} from "primeng/api";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [`
    .p-rating-icon {
      cursor: default!important;
    }

  `]
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];

  //Internationalization
  sessionStorageObservable: Observable<any> = this.ss.watchStorage();
  yearsString: string = this.ms.transaltions.skills.yearsString;
  monthsString: string = this.ms.transaltions.skills.monthsString;
  yearString: string = this.ms.transaltions.skills.yearString;
  monthString: string = this.ms.transaltions.skills.monthString;
  andString: string = this.ms.transaltions.general.and;

  nameString: string = this.ms.transaltions.form.name;
  yearsExpString: string = this.ms.transaltions.skills.yearsOfExp;
  skillString: string = this.ms.transaltions.skills.skill;

  constructor(private ms: MessagesService,
              private ss: SessionStorageService) { }

  ngOnInit(): void {
    this.updateTexts();
    this.sessionStorageObservable.subscribe(() => this.updateTexts());
  }

  calculateYears(startMonth: number, startFullYear: number, endMonth?: number, endFullYear?: number): string{
    const date = new Date();
    let finalMonth = date.getMonth() + 1;
    let finalYear = date.getFullYear();

    if(endMonth && endFullYear) {
      finalMonth = endMonth;
      finalYear = endFullYear;
    }

    let yearsExp;
    let monthsExp;
    let total;

    if (finalMonth - startMonth < 0) {
      yearsExp = finalYear - startFullYear - 1;
      monthsExp = finalMonth - startMonth + 12;
    } else {
      yearsExp = finalYear - startFullYear;
      monthsExp = finalMonth - startMonth;
    }

    if(yearsExp == 0) {
      total = `${monthsExp} ${monthsExp > 1 ? this.monthsString : this.monthString}`;
    } else if(monthsExp > 0) {
      total = `${yearsExp} ${yearsExp > 1 ? this.yearsString : this.yearString} ${this.andString} ${monthsExp} ${monthsExp > 1 ? this.monthsString : this.monthString}`;
    } else {
      total = `${yearsExp} ${yearsExp > 1 ? this.yearsString : this.yearString}`;
    }
    return total;
  }

  updateTexts() {
    this.yearsString = this.ms.transaltions.skills.yearsString;
    this.monthsString = this.ms.transaltions.skills.monthsString;
    this.yearString = this.ms.transaltions.skills.yearString;
    this.monthString = this.ms.transaltions.skills.monthString;
    this.andString = this.ms.transaltions.general.and;

    this.nameString = this.ms.transaltions.form.name;
    this.yearsExpString = this.ms.transaltions.skills.yearsOfExp;
    this.skillString = this.ms.transaltions.skills.skill;


    this.skills = [
      {img:'assets/skills/IntelliJ_IDEA_Icon.svg.png', name:'IntelliJ Idea', yearsExp: this.calculateYears(7,2018), rating: 5},
      {img:'assets/skills/java.png', name:'Java 8', yearsExp: this.calculateYears(7,2018), rating: 5},
      {img:'assets/skills/maven.png', name:'Maven', yearsExp: this.calculateYears(7,2018), rating: 5},
      {img:'assets/skills/hibernate-logo-png-transparent.png', name:'Hibernate', yearsExp: this.calculateYears(7,2018), rating: 5},
      {img:'assets/skills/Git-Icon-1788C.png', name:'Git', yearsExp: this.calculateYears(7,2018), rating: 5},
      {img:'assets/skills/scrumLogo.png', name:'Scrum', yearsExp: this.calculateYears(7,2018) , rating: 5},
      {img:'assets/skills/ms-sql-server-logo.png', name:'MySQL', yearsExp: this.calculateYears(7,2018, 11, 2020), rating: 5},
      {img:'assets/skills/spring-boot-ok.png', name:'Spring Boot', yearsExp: this.calculateYears(7,2018, 11, 2020), rating: 4},
      {img:'assets/skills/Apache_Tomcat_logo.svg.png', name:'Tomcat', yearsExp: this.calculateYears( 7, 2018, 6, 2021), rating: 4},
      {img:'assets/skills/primeng_solidBlack.png', name:'Primefaces', yearsExp: this.calculateYears(7,2018, 11, 2020), rating: 4},
      {img:'assets/skills/angular.png', name:'Angular', yearsExp: this.calculateYears(9,2021), rating: 4},
      {img:'assets/skills/plsql.png', name:'Oracle & PLSQL', yearsExp: this.calculateYears( 6, 2021, 12, 2021), rating: 3},
      {img:'assets/skills/jsf-logo.png', name:'JSF 2.2', yearsExp: this.calculateYears(6,2021, 12, 2021), rating: 3},
      {img:'assets/skills/struts.png', name:'Struts', yearsExp: this.calculateYears(7,2018, 11, 2020), rating: 3},
      {img:'assets/skills/1200px-React.svg.png', name:'React', yearsExp: this.calculateYears(8,2020, 11, 2020), rating: 2},
      {img:'assets/skills/websphere-liberty.jpg', name:'WebSphere Liberty', yearsExp: this.calculateYears( 6, 2021, 12, 2021), rating: 2}
    ]

  }

  customSort(event: SortEvent) {
    console.log(event);
    event.data!.sort((data1, data2) => {
      let value1 = data1[event.field!];
      let value2 = data2[event.field!];
      let result;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if(event.field !== 'yearsExp') {
          if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
          else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
        } else {
          if ((value1.includes('year') || value1.includes('any') || value1.includes('año')) && (!value2.includes('year') && !value2.includes('any') && !value2.includes('año')))
            result = 1;
          else if ((!value1.includes('year') && !value1.includes('any') && !value1.includes('año')) && (value2.includes('year') || value2.includes('any') || value2.includes('año')))
            result = -1;
          else
            result = value1.localeCompare(value2);
        }

      return (event.order! * result);
    });
  }

}

