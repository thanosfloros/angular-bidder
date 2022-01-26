import { Injectable } from '@angular/core';
import { Campaign } from './campaigns';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  items: Campaign[] = [];

  addToCart(campaign: Campaign) {
    this.items.push(campaign);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
