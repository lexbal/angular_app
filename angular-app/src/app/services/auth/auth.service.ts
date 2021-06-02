import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import firebase from 'firebase/app';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [];
  isAuth: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private userService: UserService
  ) { }

  public isAuthenticated() {
    return this.afAuth.onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          //localStorage.getItem('user')
          this.isAuth = false
        }
      }
    )
  }

  public getUsername(): string {
    let user = this.isAuthenticated();

    return (user) ? JSON.parse(user).username : null;
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

  loginFireBase(email: string, password: string): Promise<void> {
    return new Promise<void>(
      (resolve, reject) => {
        this.afAuth.signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  registerFireBase(email: string, password: string): Promise<void> {
    return new Promise<void>(
      (resolve, reject) => {
        this.afAuth.createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  public logout() {
    this.afAuth.signOut();
    localStorage.removeItem('user');
    //this.router.navigate(['/']);
  }
}
