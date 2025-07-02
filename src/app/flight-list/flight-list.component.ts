import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SharedStateService } from '../shopping-cart/service/shopping-cart-service';
import Swal from 'sweetalert2';

export interface Flight {
  flightId: string,
  flightCode: string;
  origin: string;
  destination: string;
  startTime: string;
  price: number;
  availableSeats: string[];
}


@Component({
  selector: 'app-flight-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent {
  @Input() flights: any[] = [];

  selectedSeats: { [flightCode: string]: string[] } = {};

  constructor(private sharedState: SharedStateService) {}
  
  onSeatChange(flightId: number, seat: string, event: any) {

    if (!this.selectedSeats[flightId]) {
      this.selectedSeats[flightId] = [];
    }

    if (event.target.checked) {
      this.selectedSeats[flightId].push(seat);
    } else {
      this.selectedSeats[flightId] = this.selectedSeats[flightId].filter(s => s !== seat);
    }
  }

  add(flight: Flight) {
    const seats = this.selectedSeats[flight.flightId] || [];

    if (seats.length === 0) {
      this.showWarningAlert('Por favor, selecione pelo menos um assento.')
      return;
    }

    const reservation = {
      ...flight,
      selectedSeats: seats
    };

    this.sharedState.setInfo(reservation);    
    this.showSuccessAlert("Seus acentos foram pré-reservados.")
  }

  showWarningAlert(message: string) {
      Swal.fire({
        icon: 'warning',
        title: 'Atenção',
        text:  message,
      });
  }

  showSuccessAlert(message: string) {
      Swal.fire({
        icon: 'info',
        title: 'Falta pouco!',
        text:  message,
      });
  }
}
