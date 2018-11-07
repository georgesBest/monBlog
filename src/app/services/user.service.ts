import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable()
export class userService {
name:string;
forename:string;
email:string;
users:UserModel[];
//users:any[];
constructor(private httpClient: HttpClient){

}

add(name:string, forename:string,email:string,password:string) {

        /*const getDb = this.httpClient.get<any[]>('https://monblog-8e2fa.firebaseio.com/user.json');
        getDb.subscribe(
            (response) => {
                this.users=response;
                console.log(response);
              },
              (error) => {
                console.log('Erreur : ' + error);
              },
              () => {
                console.log('fin');
              }
        )*/
        

        const newUser  = {'name' : name,'forename':forename,'email':email, 'password':password};

        //this.users.push(newUser);
        //post est un observable
        const postDb = this.httpClient.put('https://monblog-8e2fa.firebaseio.com/user/'+email+'.json',newUser);
        const maSub = postDb.subscribe (
          (value) => {
            console.log(value);
          },
          (error) => {
            console.log('Erreur : ' + error);
          },
          () => {
            console.log('fin');
          }
        );
}

checkAuth(email,password){
    const getDb = this.httpClient.get<any[]>('https://monblog-8e2fa.firebaseio.com/user.json');
    getDb.subscribe(
        (response) => {
            this.users = response;

            Object.entries(this.users).forEach(function(element){
                if(element[1].email == email) {
                    console.log(element[1].email);
                }
            });
            
        },
          (error) => {
            console.log('Erreur : ' + error);
          },
          () => {
            console.log('fin');
          }
    )
    //const userTocheck = new UserModel('','',email,password);

}


 
}