import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { from, BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser!: User|null;
  currentUserSubject: BehaviorSubject<User|null> = new BehaviorSubject<User|null>(null);

  constructor(private afAuth: AngularFireAuth,
              private userService: UserService) { }

  public isAuthenticated(): string|Subscription {
    let userStorage = localStorage.getItem('user');

    if (userStorage) {
      this.currentUser = JSON.parse(userStorage);
      this.emitUserSubject();

      return userStorage;
    }
    
    return this.afAuth.authState.subscribe(
      (user) => {
        if (!user) {
          localStorage.removeItem('user');

          return;
        }

        this.setCurrentUser(new User("", "", "", user.email?.toString()));
    });
  }

  login(username: string, password: string): Observable<User|false> {
    let users: User[] = [];

    this.userService.userSubject.subscribe(
      (users: User[]) => {
        users = users;
      }
    );

    return from(users).pipe(map(user => {
      if (user.username == username && user.password == password) {
        this.setCurrentUser(user)

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
            this.setCurrentUser(new User("", "", "", email))
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

  logout(): void {
    this.afAuth.signOut();
    localStorage.removeItem('user');
    this.currentUser = null;
    this.emitUserSubject();
  }

  emitUserSubject(): void {
    this.currentUserSubject.next(this.currentUser);
  }

  getCurrentUser(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(this.currentUser))
    this.emitUserSubject();
  }
}
