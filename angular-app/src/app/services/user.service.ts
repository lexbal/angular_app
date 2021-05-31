import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {
      "firstname": "Will", 
      "lastname": "Alexander", 
      "username": "w.alexander",
      "email": "will@will.com",
      "password": "123456",
      "drinkPreference": "jus d'orange",
      "hobbies": [
        {"name": "coder"},
        {"name": "boire du café"}
      ]
    },
  ];
  userSubject = new Subject<User[]>();

  constructor() { }

  addUser(user: User) {
    this.users.push(user);
    this.emitUser();
  }

  emitUser() {
    this.userSubject.next(this.users.slice());
  }
}
