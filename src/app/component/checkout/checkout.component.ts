import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {
  name = '';
  address = '';
  message = '';

  constructor(private cart: CartService) {}

  placeOrder() {
    if (this.cart.getItems().length === 0) {
      this.message = 'Cart is empty!';
      return;
    }

    this.message = 'Thank you, ${this.name}! Your order has been placed successfully.';
    this.cart.clearCart();
  }
}