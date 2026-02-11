import { inject, Injectable } from '@angular/core';
import { data, User } from './data';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})

export class UserService {
  private userData: User[] = data;
  http = inject(HttpClient);

  constructor() { }

  getUserData(): Promise<User[]> {
    return new Promise((resolve) => {
      resolve(this.userData);
    });
  }
}
