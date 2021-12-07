import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UploadComponent} from "./upload/upload.component";
import {ValidateUserGuard} from "../guards/validate-user.guard";

const routes: Routes = [
  {path: '', children: [
      {path: '', component: LoginComponent},
      {path: 'upload', component: UploadComponent, canActivate: [ValidateUserGuard], canLoad: [ValidateUserGuard]},
      {path: '**', redirectTo: ''}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
