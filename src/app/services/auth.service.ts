import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userService } from '../services/user.service';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class AuthService {
isAuth:boolean=false;

constructor(private httpClient: HttpClient, private userService: userService){

}

setAuthTrue(){
    this.isAuth=true;
  }

  setAuthFalse(){
    this.isAuth=false;
  }

//checkAuth(email:string, password:string){
  
//const t = this.userService.checkAuth();
  /*if (email=='admin' && password == 'admin') {
    this.isAuth =true;
  }*/
//}

}