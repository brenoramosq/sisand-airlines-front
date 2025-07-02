import { Component, OnInit } from '@angular/core';
import { CheckoutService } from './service/checkout-service';
import { CommonModule } from '@angular/common'; 
import { LoginRegisterService } from '../login-register/services/login-register-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  items: any[] = [];
  total: number = 0;

  constructor(private cartService: CheckoutService, private loginSevice: LoginRegisterService) {}

  ngOnInit() {
    this.items = this.cartService.getCart();
    console.log(this.items);
    this.calculateTotal();
  }

  totalAssets() {
    let totalSeats = 0;
    this.items.forEach(item => {  
       totalSeats += item.selectedSeats.length;
    });

    return totalSeats;
  }

  calculateTotal() {
    this.total = this.items.reduce((sum, flight) => {
      return sum + (flight.price * flight.selectedSeats.length);
    }, 0);
  }

  checkout() {
    
  }

   showWarningAlert(message: string) {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção',
        text: message,
      });
    }
}