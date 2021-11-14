import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LanguagesComponent} from './pages/languages/languages.component';
import {MenuComponent} from './pages/menu/menu.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import { ContactComponent } from './pages/contact/contact.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ErrorMsgDirective} from "./directives/error-msg.directive";


@NgModule({
  declarations: [
    LanguagesComponent,
    MenuComponent,
    ContactComponent,
    ErrorMsgDirective
  ],
  exports: [
    LanguagesComponent,
    ContactComponent,
    MenuComponent,
    ErrorMsgDirective
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
}
