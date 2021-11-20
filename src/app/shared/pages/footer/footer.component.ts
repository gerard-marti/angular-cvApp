import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  items: MenuItem[] = [];
  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-envelope',
        routerLink: '/cv/send-email',
      },
      {
        icon: 'fab fa-linkedin',
        url: 'https://www.linkedin.com/in/gerard-marti-sendra/'
      },
      {
        icon: 'pi pi-github',
        url: 'https://github.com/Weikand'
      },
      // {
      //   icon: 'pi pi-external-link',
      //   url: 'https://www.linkedin.com/in/gerard-marti-sendra/'
      //
      // }
    ];
  }
}
