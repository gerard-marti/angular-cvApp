import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";
import {Router} from "@angular/router";
import {SessionStorageService} from "../../services/sessionStorage.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  socialUser: SocialUser | null = null;
  isLoggedIn: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private route: Router,
    private ss: SessionStorageService
  ) {
    console.log('SessionStorage: ',this.ss.getItem('isLoggedIn'));
    console.log('SessionStorage socialUser: ',this.ss.getItem('socialUser'));
    this.isLoggedIn = (this.ss.getItem('isLoggedIn') == 'true') || false;
    this.socialUser = this.ss.getItem('socialUser') != 'null' ? JSON.parse(this.ss.getItem('socialUser')!) : null;
  }

  ngOnInit() {

    if (this.isLoggedIn && this.socialUser != null && environment.authMails.includes(this.socialUser.email)) {
      this.route.navigateByUrl('/auth/upload');
    } else {
      this.logOut();
    }

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedIn = (user != null);

      this.ss.setItem('isLoggedIn', this.isLoggedIn);
      this.ss.setItem('socialUser', JSON.stringify(this.socialUser));

      if (this.isLoggedIn && environment.authMails.includes(this.socialUser.email)) {
        this.route.navigateByUrl('/auth/upload');
      } else {
        this.logOut();
      }
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
    this.ss.removeItem('isLoggedIn');
    this.ss.removeItem('socialUser');
  }

}
