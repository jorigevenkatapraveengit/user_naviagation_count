import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Role } from 'src/app/app.model';

@Injectable({
  providedIn: 'root'
})
export class AdminGaurdService implements CanActivate {

constructor(private appService : AppService , private router:Router) { }
canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot  ): boolean  | UrlTree
{
 
  return    this.appService.loginSuccessUser?.role === Role.ADMIN ? true : this.router.createUrlTree(['home']);

}
}
