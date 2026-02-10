import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: ` <h1>Welcome to {{ title }}!</h1>
  <ol>
  @for (item of productTitles; track $index) {
      <li><a [routerLink]="['details/', $index ]">{{item}}</a></li>
  }
   </ol>
  <router-outlet/>
  `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
