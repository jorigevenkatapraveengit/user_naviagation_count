import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccessGaurdService implements CanActivate {
  constructor(private appService: AppService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
   
    return this.appService.loginSuccessUser
      ? true
      : this.router.createUrlTree(['']);
  }
}
