import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public static readonly SESSION_STORAGE_KEY: string = "googleUser";

  infoUser ?: SocialUser;

  constructor() { }

  public setUser(user: SocialUser) {
    this.infoUser = user;
    sessionStorage.setItem(LoginService.SESSION_STORAGE_KEY, JSON.stringify(this.infoUser));
  }

  public getUser() {
    let user : string | any  = sessionStorage.getItem(LoginService.SESSION_STORAGE_KEY);
    this.infoUser = JSON.parse(user);
  }

  public removeUser() {
    sessionStorage.removeItem(LoginService.SESSION_STORAGE_KEY);
  }
}
