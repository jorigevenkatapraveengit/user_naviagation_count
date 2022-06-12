import { Router } from '@angular/router';
import { LoginInfo, StorageKeys } from '../app.model';
import { AppService } from './../app.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit() {
    let loginSuccessUser = sessionStorage.getItem(StorageKeys.LOGIN_SUCCESS_USER);
    if (loginSuccessUser) {
      this.navigateTOHome();
    }
  }
  login(form: NgForm) {
    console.log(form, 'login form ');
    if (form.valid) {
      this.appService.login(<LoginInfo>form.value).subscribe((val) => {
        if (val) {
          this.navigateTOHome();
        }
      });
    }
  }
  navigateTOHome() {
    this.router.navigate(['home']);
  }
}
