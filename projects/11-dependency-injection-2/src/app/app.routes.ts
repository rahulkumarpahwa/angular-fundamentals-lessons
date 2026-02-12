import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ThisUserComponent } from './this-user/this-user.component';
import { UserInfoComponent } from './user-info/user-info.component';

export const routes: Routes = [
  {
    path: "",
    component: UserInfoComponent
  },
  {
    path: "user/:id",
    component: ThisUserComponent
  }
];
