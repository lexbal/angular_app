import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  public isAuthenticated() {
    return localStorage.getItem('user');
  }

  public getUsername(): string {
    let user = this.isAuthenticated();

    return (user) ? JSON.parse(user).username : null;
  }

  public logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  login(username: string, password: string) {
    this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUser();

    return from(this.users).pipe(map(user => {
      if (user.username == username && user.password == password) {
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }
      
      return false;
    }));
  }
}
