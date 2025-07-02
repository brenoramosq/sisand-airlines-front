import { Routes } from '@angular/router';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'flight-booking', pathMatch: 'full' },
  { path: 'flight-booking', component: FlightBookingComponent },
  { path: 'checkout', component: CheckoutComponent }
];
