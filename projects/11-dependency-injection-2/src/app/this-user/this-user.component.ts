import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../data';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-this-user',
  standalone: true,
  imports: [CommonModule],
  template: `
       <p>ID: {{ user$.id }} Email : {{ user$.email }}</p>
    <!-- add more properties to customize -->
    <p>Name : {{user$.name}} Username : {{user$.username}}</p>
  `,
  styles: ``
})
export class ThisUserComponent implements OnInit {
  idValue !: number; // note that this value we get is after the component has been once rendered on the screen go calling the api on the contructor using this value makes no sense and gives error of not getting the value. so, call the method on the ngOnInit() instead. 
  @Input() set id(value: string) {
    this.idValue = Number(value);
  }
  user$!: User;
  http = inject(HttpClient);
  userService = inject(UserService);
  constructor() {
  }
  ngOnInit(): void {
    this.userService.getUserDataById(this.idValue)
    this.userService.userDataById$.subscribe(user => this.user$ = user)
  }
}
