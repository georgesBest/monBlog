import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  auth:boolean;
  constructor(private authService: AuthService) {
  
  }
  ngOnInit() {
    this.auth=this.authService.isAuth;
  }

  setAuthenticateTrue(){
    this.authService.setAuthTrue();
    this.auth= this.authService.isAuth;
  }

  setAuthenticateFalse(){
    this.authService.setAuthFalse();
    this.auth= this.authService.isAuth;
  }
  
}
