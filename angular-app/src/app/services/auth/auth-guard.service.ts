import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public authService: AuthService, 
    public router: Router, 
    private afAuth: AngularFireAuth
  ) {}

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/auth', 'login']);
      return false;
    }

    return new Promise(
      (resolve, reject) => {
        this.afAuth.onAuthStateChanged(
          (user) => {
            if (user) {
              resolve(true);
            } else {
              this.router.navigate(['/auth', 'login']);
              resolve(false);
            }
          }
        )
      }
    );
  }
}
