import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MessagesService} from "../../../services/messages.service";
import {Observable} from "rxjs";
import {SessionStorageService} from "../../../services/sessionStorage.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    img {
      cursor: pointer;
    }
  `]
})
export class MenuComponent implements OnInit {

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
        label: this.ms.getMessage('dock_summary'),
        icon: "assets/dock/info-svgrepo-com.svg",
        routerLink: 'cv'
      },
      {
        label: this.ms.getMessage('dock_studies'),
        icon: "assets/dock/student-hat-svgrepo-com.svg",
        routerLink: 'cv/studies'
      },
      {
        label: this.ms.getMessage('dock_prof_exp'),
        icon: "assets/dock/job-search-svgrepo-com.svg",
        routerLink: 'cv/professional-exp'
      },
      {
        label: this.ms.getMessage('dock_skills'),
        icon: "assets/dock/settings-svgrepo-com.svg",
        routerLink: 'cv/skills'
      },
      {
        label: this.ms.getMessage('dock_other'),
        icon: "assets/dock/contact-svgrepo-com.svg",
        routerLink: 'cv/other-info'
      }
    ];
  }

}
