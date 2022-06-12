import { from, Observable, of } from 'rxjs';
import { User, LoginInfo, StorageKeys } from './app.model';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService{

users : User[]
loginSuccessUser: User | undefined;

constructor() { 

}

login(loginInfo:LoginInfo):Observable<boolean> {
 this.loginSuccessUser = this.users.find(val=>val.username ===  loginInfo.username && val.password ===  loginInfo.password);
 this.loginSuccessUser && sessionStorage.setItem(StorageKeys.LOGIN_SUCCESS_USER, JSON.stringify(this.loginSuccessUser))
  return this.loginSuccessUser ? of(true) : of(false) ;
}
}
