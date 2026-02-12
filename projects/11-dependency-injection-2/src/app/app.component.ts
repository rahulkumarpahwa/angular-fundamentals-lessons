import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from "./user-info/user-info.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <h1>User Listing</h1>

  <section>
  <p>this is the place where particular user data will be shown: </p>

  <router-outlet/>
  </section>
  `,
  imports: [RouterModule]
})
export class AppComponent {
}
