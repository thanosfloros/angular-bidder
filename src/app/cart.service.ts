import { Injectable } from '@angular/core';
import { Campaign } from './campaigns';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Campaign[] = [];
  constructor(private http: HttpClient) {}

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

  getShippingPrices() {
    return this.http.get<
      {
        id: string;
        price: number;
        targetedCountries: string;
        targetedLocations: string;
      }[]
    >('/assets/shipping.json');
  }
}
