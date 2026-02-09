import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section class="container">
      <!-- This article element represents and entire listing -->
       @for (car of carList; track $index) {
        <!-- here the track $id gives the index of the list which can be any value of the list ie. track car.id with each each having the id which should be unique or the by default you can use the $index with it to access the index. it is similar to the key in react. Also, the track is must to put in the loop but not to use.  -->
<article class="listing">
        <div class="image-parent">
          <img class="product-image" [src]="car.image" />
        </div>
        <section class="details">
          <p class="title"><!-- car make and model-->{{$index}} {{car.make}} {{car.model}}</p>
          <hr />
          <p class="detail">
            <span>Year</span>
            <span><!-- year -->{{car.year}}</span>
          </p>
          <div class="detail">
            <span>Transmission</span>
            <span><!-- transmission -->{{car.transmission}}</span>
          </div>
          <p class="detail">
            <span>Mileage</span>
            <span><!-- miles -->{{car.miles}}</span>
          </p>
          <p class="detail">
            <span>Price</span>
            <span><!-- price -->{{car.price}}</span>
          </p>
        </section>
      </article>
       } @empty {
        <p>Car List is Empty</p>
       }
      
    </section>
  `,
  styleUrl: 'app.component.css',
})
export class AppComponent {
  carList = [
    {
      image: "./assets/blue-car.jpeg",
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      image: "./assets/red-car.jpeg",
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      image: "./assets/blue-car.jpeg",
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      image: "./assets/red-car.jpeg",
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];
}
