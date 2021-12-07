import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from "angularx-social-login";

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PrimeNgModule} from "../prime-ng/prime-ng.module";


@NgModule({
  declarations: [
    LoginComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    PrimeNgModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '703984191001-v7eqcdkiuor7s1413c72t0i1mi9eic44.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
})
export class AuthModule { }
