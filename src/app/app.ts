import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule,
    RouterModule,
    FlightBookingComponent,
    NavBarComponent, 
    LoginRegisterComponent, 
    ShoppingCartComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'SisandAirlines';
}
