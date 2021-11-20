import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Observable} from "rxjs";
import {MessagesService} from "../../../services/messages.service";
import {SessionStorageService} from "../../../services/sessionStorage.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    `
  ]
})
export class MenuComponent implements OnInit {

  display: boolean = false;
  dockItems: MenuItem[] = [];
  sessionStorageObservable: Observable<any> = this.ss.watchStorage();

  constructor(private ms:MessagesService, private ss:SessionStorageService) { }

  ngOnInit() {
    this.sessionStorageObservable
      .subscribe(() => {
        this.updateDockItems();
      })
    this.updateDockItems();

  }

  updateDockItems() {
    this.dockItems = [
      {
        label: this.ms.transaltions.dockMenu.summary,
        icon: "assets/dock/info-svgrepo-com.svg",
        routerLink: 'cv/main'
      },
      {
        label: this.ms.transaltions.dockMenu.studies,
        icon: "assets/dock/student-hat-svgrepo-com.svg",
        routerLink: 'cv/studies'
      },
      {
        label: this.ms.transaltions.dockMenu.prof_exp,
        icon: "assets/dock/job-search-svgrepo-com.svg",
        routerLink: 'cv/professional-exp'
      },
      {
        label: this.ms.transaltions.dockMenu.skills,
        icon: "assets/dock/settings-svgrepo-com.svg",
        routerLink: 'cv/skills'
      },
      {
        label: this.ms.transaltions.dockMenu.other,
        icon: "assets/dock/contact-svgrepo-com.svg",
        routerLink: 'cv/other-info'
      }
    ];
  }

}
