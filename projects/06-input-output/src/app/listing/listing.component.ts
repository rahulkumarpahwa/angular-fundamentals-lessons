import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../car';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule],
  template: ` <article class="listing">
        <div class="image-parent">
          <img class="product-image" src="https://placehold.co/100x100" />
        </div>
        <section class="details">
          <p class="title"><!-- car make and model-->{{car.make}} {{car.model}}</p>
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
        <button (click)="saveHandler()">Save</button>
      </article> `,
  styles: ``,
})
export class ListingComponent {
  @Input() car!: Car;
  @Output() carSaved = new EventEmitter<Car>();

  saveHandler() {
    this.carSaved.emit(this.car)
  }

}
