import { inject, Injectable } from '@angular/core';
import { User } from './data';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class UserService {
  http = inject(HttpClient);


  private userData = new BehaviorSubject<User[]>([]);
  userData$ = this.userData.asObservable();


  private userDataById = new BehaviorSubject<User>({
    id: -1,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  });

  userDataById$ = this.userDataById.asObservable();

  constructor() { }

  getUserData() {
    this.http.get<User[]>("https://jsonplaceholder.typicode.com/users").subscribe(users => {
      this.userData.next(users)
    });
  }

  getUserDataById(id: number) {
    this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(user =>
      this.userDataById.next(user)
    )
  }

}
