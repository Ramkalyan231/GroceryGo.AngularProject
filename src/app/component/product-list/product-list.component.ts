import { Component } from '@angular/core';
import { CartService, Product } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  searchTerm = '';
  category = 'All';

  products: Product[] = [
    { id: 1, name: 'Apples', price: 120, unit: '1kg', category: 'Fruits',image: 'assets/apple.jpeg'  },
    { id: 2, name: 'Bananas', price: 80, unit: '1kg', category: 'Fruits',image: 'assets/banana.jpeg'},
    { id: 3, name: 'Milk', price: 50, unit: '1L', category: 'Dairy',image: 'assets/milk.jpeg' },
    { id: 4, name: 'Bread', price: 40, unit: '1 loaf', category: 'Bakery',image: 'assets/bread.jpeg' },
    { id: 5, name: 'Eggs', price: 60, unit: '6 pcs', category: 'Dairy',image: 'assets/eggs.jpeg' },
    { id: 6, name: 'Rice', price: 90, unit: '1kg', category: 'Grains',image: 'assets/rice.jpeg' },
    { id: 7, name: 'Carrots', price: 45, unit: '500g', category: 'Vegetables',image: 'assets/carrot.jpeg' },
    { id: 8, name: 'Orange', price: 60, unit: '1kg', category: 'Fruits'  },
    { id: 9, name: 'Tomato', price: 40, unit: '1kg', category: 'Vegetables'  },
    { id: 10, name: 'Curd', price: 45, unit: '1/2kg', category: 'Dairy'  },
    { id: 11, name: 'Potato', price: 55, unit: '1kg', category: 'Vegetables' },
    { id: 12, name: 'Guava', price: 70, unit: '1kg', category: 'Fruits' },
    { id: 13, name: 'WaterMelon', price: 30, unit: '1kg', category: 'Fruits' },
    { id: 14, name: 'Ice Cream', price: 100, unit: '1kg', category: 'Dairy' }





  ];

  constructor(private cart: CartService) {}

  add(p: Product) {
    this.cart.addToCart(p);
    alert(p.name + ' added to cart!');
  }

  filteredProducts() {
    return this.products.filter(p => {
      const matchesCategory =
        this.category === 'All' || p.category === this.category;
      const matchesSearch = p.name
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
}