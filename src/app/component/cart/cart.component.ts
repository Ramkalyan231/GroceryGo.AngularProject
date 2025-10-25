import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  constructor(public cart: CartService) {}

  remove(id: number) {
    this.cart.removeFromCart(id);
  }

  total() {
    return this.cart.getTotal();
  }
}