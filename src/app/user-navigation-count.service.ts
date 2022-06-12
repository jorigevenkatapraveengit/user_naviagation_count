import { UserData, StorageKeys } from './app.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserNavigationCountService {
  userNavigationCount: UserData = {};
  tabsList =  new Set<string>();
  constructor() {
    this.userNavigationCount = JSON.parse(
      <string>sessionStorage.getItem(StorageKeys.USER_NAVIGATION_COUNT)
    );
    this.tabsList = new Set(<string[]>JSON.parse(
      <string>sessionStorage.getItem('USER_NAVIGATION_TABS_LIST')
    )) ;
    if (!this.userNavigationCount) {
      this.userNavigationCount = {};
    }
  }
}
