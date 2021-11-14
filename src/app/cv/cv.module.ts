import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ProfesionalExpComponent } from './pages/profesional-exp/profesional-exp.component';
import { StudiesComponent } from './pages/studies/studies.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { OtherInfoComponent } from './pages/other-info/other-info.component';
import {PrimeNgModule} from "../prime-ng/prime-ng.module";
import { EmailComponent } from './pages/email/email.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MainComponent,
    ProfesionalExpComponent,
    StudiesComponent,
    SkillsComponent,
    OtherInfoComponent,
    EmailComponent
  ],
  imports: [
    CommonModule,
    CvRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class CvModule { }
