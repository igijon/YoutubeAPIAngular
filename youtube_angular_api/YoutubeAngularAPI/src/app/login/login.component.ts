import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  socialUser?: SocialUser;
  isLoggedin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      /*if(this.isLoggedin && this.socialUser != null)
        this.loginService.setUser(this.socialUser);*/
      console.log(this.socialUser);
    });
  }

  ngOnInit(): void {

  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    //Cuando pongo el parámetro revoke a true estoy forzando el cierre de sesión completamente en Google.
    this.socialAuthService.signOut(true);
    //this.loginService.removeUser();
  }
}
