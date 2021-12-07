import {Injectable} from '@angular/core';
import {CanActivate, CanLoad, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {SessionStorageService} from "../services/sessionStorage.service";
import {SocialUser} from "angularx-social-login";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ValidateUserGuard implements CanActivate, CanLoad {

  socialUser: SocialUser | null = null;

  constructor(private ss: SessionStorageService,
              private router: Router) {
    this.socialUser = this.ss.getItem('socialUser') != 'null' ? JSON.parse(this.ss.getItem('socialUser')!) : null;
  }

  canActivate(): Observable<boolean> | boolean {
    if(this.socialUser) {
      if (environment.authMails.includes(this.socialUser.email)) {
        return true;
      }
    } else {
      this.router.navigateByUrl('/auth')
    }
    return false;
  }
  canLoad(): Observable<boolean> | boolean  {
    if(this.socialUser) {
      if (environment.authMails.includes(this.socialUser.email)) {
        return true;
      }
    } else {
      this.router.navigateByUrl('/auth')
    }
    return false;
  }
}
