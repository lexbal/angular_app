import { Injectable } from '@angular/core';
import { RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuardService implements CanActivate {

  constructor(public authService: AuthService, 
              public router: Router) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.authService.isAuthenticated();

    if (this.authService.currentUser) {
        this.router.navigate(['/']);

      return false;
    }

    return true;
  }
}
