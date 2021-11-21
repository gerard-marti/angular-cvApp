import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LanguagesComponent} from './pages/languages/languages.component';
import {MenuComponent} from './pages/menu/menu.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ErrorMsgDirective} from "./directives/error-msg.directive";
import { FooterComponent } from './pages/footer/footer.component';


@NgModule({
  declarations: [
    LanguagesComponent,
    MenuComponent,
    ErrorMsgDirective,
    FooterComponent
  ],
    exports: [
        LanguagesComponent,
        MenuComponent,
        ErrorMsgDirective,
        FooterComponent,
        MenuComponent
    ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
}
