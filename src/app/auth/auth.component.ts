import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { userService } from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  auth:boolean;
  constructor(private authService: AuthService, private userService:userService) {
  
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

  onSubmit(form: NgForm){
    const email=form.value['email'];
    const password=form.value['password'];
    //this.authService.checkAuth(email,password);
    //console.log(this.authService.isAuth);
    this.userService.checkAuth(email,password);
  }
  
}
