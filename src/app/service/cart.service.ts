import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  unit: string;
  category?: string;
  image?:String;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: { product: Product; qty: number }[] = [];

  constructor() {
    const saved = localStorage.getItem('cartItems');
    if (saved) {
      this.items = JSON.parse(saved);
    }
  }

  private save() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  addToCart(product: Product) {
    const found = this.items.find(i => i.product.id === product.id);
    if (found) found.qty++;
    else this.items.push({ product, qty: 1 });
    this.save();
  }

  removeFromCart(id: number) {
    this.items = this.items.filter(i => i.product.id !== id);
    this.save();
  }

  clearCart() {
    this.items = [];
    this.save();
  }

  getTotal() {
    return this.items.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  }
}