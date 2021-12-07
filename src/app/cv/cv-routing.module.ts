import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfesionalExpComponent} from "./pages/profesional-exp/profesional-exp.component";
import {SkillsComponent} from "./pages/skills/skills.component";
import {StudiesComponent} from "./pages/studies/studies.component";
import {OtherInfoComponent} from "./pages/other-info/other-info.component";
import {MainComponent} from "./pages/main/main.component";
import {EmailComponent} from "./pages/email/email.component";

const routes: Routes = [
  {path: '', children: [
      {path: '', component: MainComponent, pathMatch: 'full'},
      {path: 'professional-exp', component: ProfesionalExpComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'studies', component: StudiesComponent},
      {path: 'other-info', component: OtherInfoComponent},
      {path: 'send-email', component: EmailComponent},
      {path: '**', redirectTo: ''}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
