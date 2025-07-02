import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private items: any[] = [];

  setCart(items: any[]) {
    this.items = items;
  }

  getCart(): any[] {
    return this.items;
  }
}
