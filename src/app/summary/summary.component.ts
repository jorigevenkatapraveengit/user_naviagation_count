import { UserData } from '../app.model';
import { UserNavigationCountService } from './../user-navigation-count.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  tabArr: string[];
  userNavigationCount: UserData;

  constructor(public userNavigationCountService:UserNavigationCountService) { }

  ngOnInit() {
   this.tabArr =    (<string[]>JSON.parse(
    <string>sessionStorage.getItem('USER_NAVIGATION_TABS_LIST')
  )) ;
  this.userNavigationCount = this.userNavigationCountService.userNavigationCount 
  }

}
