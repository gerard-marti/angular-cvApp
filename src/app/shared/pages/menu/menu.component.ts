import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

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

  constructor() { }

  ngOnInit() {
    this.dockItems = [
      {
        label: 'Summary',
        icon: "assets/dock/info-svgrepo-com.svg",
        routerLink: 'cv'
      },
      {
        label: 'Studies',
        icon: "assets/dock/student-hat-svgrepo-com.svg",
        routerLink: 'cv/studies'
      },
      {
        label: 'Professional Experience',
        icon: "assets/dock/job-search-svgrepo-com.svg",
        routerLink: 'cv/professional-exp'
      },
      {
        label: 'Skills',
        icon: "assets/dock/settings-svgrepo-com.svg",
        routerLink: 'cv/skills'
      },
      {
        label: 'Other info',
        icon: "assets/dock/contact-svgrepo-com.svg",
        routerLink: 'cv/other-info'
      }
    ];

  }

}
