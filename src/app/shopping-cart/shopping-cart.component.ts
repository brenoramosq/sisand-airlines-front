import { Component, OnInit } from '@angular/core';
import { SharedStateService } from './service/shopping-cart-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CheckoutService } from '../checkout/service/checkout-service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  
  items: any[] = [];

  constructor(
    private sharedState: SharedStateService,
    private cartService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.sharedState.info$.subscribe(data => {
      if(data) {  
        this.removeSeatsByFlight(data.flightId);      
        this.items?.push(data);
        
        let totalSeats = 0;

        this.items.forEach(item => {  
           totalSeats += item.selectedSeats.length;
        });

        this.sharedState.setCount(totalSeats);
      }
    });
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => {
      const seatCount = item.selectedSeats?.length || 0;
      return total + item.price * seatCount;
    }, 0);
  }

  removeSeatsByFlight(flightId: string) {
    this.items = this.items.filter(item => item.flightId !== flightId);    
  }

  clearCart() {
    this.items = []; 
    this.sharedState.clearItems();
  }

  finalizeCart() {
    this.cartService.setCart(this.items);
    this.router.navigate(['/checkout']);
  }
}
