import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <ul>
        <li>Title : {{productList[value].title}}</li>
        <li>Price : {{productList[value].price}}</li>
        <li>Description : {{productList[value].description}}</li>
      </ul>
    </section>
  `,
  styles: ``,
})
export class DetailsComponent {
  value: number = -1;

  @Input() set id(value: number) { // this input is special, it is setter for the value passed in the route of any type. 
    this.value = value
  }
  productList = [
    {
      title: 'Product 1',
      price: 9234,
      description: 'Product 1 is the best',
    },
    {
      title: 'Product 2',
      price: 3043,
      description: 'Product 2 is special',
    },
    {
      title: 'Product 3',
      price: 4355,
      description: 'Product 3 has my heart',
    },
  ];
}
