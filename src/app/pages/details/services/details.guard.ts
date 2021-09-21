import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class DetailsGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return !!(route.queryParams.lat && route.queryParams.lon) ||
            this.router.createUrlTree(['']);
  }
}
