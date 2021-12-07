import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Observable} from "rxjs";
import {MessagesService} from "../../../services/messages.service";
import {SessionStorageService} from "../../../services/sessionStorage.service";
import {FileManagerService} from "../../../services/file-manager.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    `
  ]
})
export class MenuComponent implements OnInit {

  dockItems: MenuItem[] = [];
  displayDialog: boolean = false;
  dialogHeader: string = '';
  standardPDF: string = '';
  customPDF: string = '';

  sessionStorageObservable: Observable<any> = this.ss.watchStorage();

  constructor(private ms:MessagesService,
              private ss:SessionStorageService,
              private fileManager: FileManagerService) { }

  ngOnInit() {
    this.sessionStorageObservable
      .subscribe(() => {
        this.updateItems();
      })
    this.updateItems();


    this.dialogHeader = 'Download PDF';
    this.standardPDF = 'Standard PDF';
    this.customPDF = 'Custom PDF';

  }

  updateItems() {
    this.dockItems = [
      {
        label: this.ms.transaltions.dockMenu.summary,
        icon: "assets/dock/info-svgrepo-com.svg",
        routerLink: 'main'
      },
      {
        label: this.ms.transaltions.dockMenu.studies,
        icon: "assets/dock/student-hat-svgrepo-com.svg",
        routerLink: 'studies'
      },
      {
        label: this.ms.transaltions.dockMenu.prof_exp,
        icon: "assets/dock/job-search-svgrepo-com.svg",
        routerLink: 'professional-exp'
      },
      {
        label: this.ms.transaltions.dockMenu.skills,
        icon: "assets/dock/settings-svgrepo-com.svg",
        routerLink: 'skills'
      },
      {
        label: this.ms.transaltions.dockMenu.other,
        icon: "assets/dock/contact-svgrepo-com.svg",
        routerLink: 'other-info'
      },
      {
        label: this.ms.transaltions.general.download,
        icon: 'pi pi-download',
        command: () => {this.download()}
      }
    ];
  }

  download() {
    this.fileManager.downloadCv();
    this.displayDialog = false;
    return;
  }

}
