import { Component, inject, Input } from '@angular/core';
import { User } from '../data';
import { RouterLink } from "@angular/router";
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  template: `
  @for(user of userData$; track user.id){
<div>
    <p>ID: {{ user.id }} Email : {{ user.email }}</p>
    <!-- add more properties to customize -->
    <p>Name : {{user.name}} Username : {{user.username}}</p>
    <p>Address : {{user.address.street}}, {{user.address.suite}}, {{user.address.city}} {{user.address.zipcode}}.</p>
    <p>Geo : {{user.address.geo.lat}}, {{user.address.geo.lng}}. </p>
    <p>Phone : {{user.phone}}</p>
    <p>Website: {{user.website}}</p>
    <p>Phone : {{user.phone}}</p>
    <p>Company : {{user.company.name}}, {{user.company.catchPhrase}}, {{user.company.bs}}</p>
    <a [routerLink]="['user/', user.id]">Get This User Data</a>
  </div>
  <hr/>
  } 
  
  `,
  styles: ``,
  imports: [RouterLink],
})
export class UserInfoComponent {
  userService = inject(UserService);
    userData$: User[] = [];
    constructor() {
      this.userService.getUserData();
      this.userService.userData$.subscribe(data => this.userData$ = data);
    }
  // Test user data
  user: User = {
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
  };
}
