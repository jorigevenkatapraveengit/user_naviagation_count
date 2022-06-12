import { filter } from 'rxjs';
import { AppService } from './app.service';
import { UserNavigationCountService } from './user-navigation-count.service';
import { users, Role, StorageKeys } from 'src/app/app.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mock_proj';
  isAdmin: boolean;
  subSink = new SubSink()
  constructor(
    private router: Router,
    private userNavigationCountService: UserNavigationCountService,
    public appService: AppService
  ) {
    localStorage.setItem(StorageKeys.USERS, JSON.stringify(users));
  }
  ngOnInit(): void {
    this.appService.users = JSON.parse(<string>localStorage.getItem(StorageKeys.USERS));
    this.appService.loginSuccessUser = JSON.parse(
      <string>sessionStorage.getItem(StorageKeys.LOGIN_SUCCESS_USER)
    );
   this.subSink.sink = this.router.events
      .pipe(filter((val) => val instanceof NavigationEnd))
      .subscribe((val: any) => {
        let username = <string>this.appService.loginSuccessUser?.username;
        this.isAdmin = this.appService.loginSuccessUser?.role === Role.ADMIN
        if (this.appService.loginSuccessUser?.username) {
          let userNavigationCount =
            this.userNavigationCountService.userNavigationCount[username];
          let tabname = val.url.toString().substring(1).replaceAll('/', '_');
          this.userNavigationCountService.tabsList.add(tabname);
          if (userNavigationCount) {
            if (!userNavigationCount[tabname]) {
              userNavigationCount[tabname] = 0;
            }
          } else {
            userNavigationCount =
              this.userNavigationCountService.userNavigationCount[username] = {
                [tabname]: 0,
              };
          }
          userNavigationCount[tabname]++;
          console.log(this.userNavigationCountService.userNavigationCount);
          sessionStorage.setItem(
            StorageKeys.USER_NAVIGATION_TABS_LIST,
            JSON.stringify(
              [...this.userNavigationCountService.tabsList.keys()].filter(
                (val) => val
              ).sort()
            )
          );

          sessionStorage.setItem(
            StorageKeys.USER_NAVIGATION_COUNT,
            JSON.stringify(this.userNavigationCountService.userNavigationCount)
          );
        }
      });
  }
  logout() {
    sessionStorage.clear();
    this.appService.loginSuccessUser = undefined;
    this.router.navigate(['']);
  }
  naviagetToSummary() {
    this.router.navigate(['summary']);
  }  
  naviagetToHome() {
    this.router.navigate(['home']);
  }
  ngOnDestroy(): void {
    localStorage.removeItem('users');
    this.subSink.unsubscribe()
  }
}
