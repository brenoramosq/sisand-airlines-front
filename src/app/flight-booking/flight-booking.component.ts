import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import FlightBookingService from './services/flight-booking-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { FlightListComponent } from '../flight-list/flight-list.component';

@Component({
  selector: 'app-flight-booking',
  standalone: true,
  imports: [FormsModule, CommonModule, FlightListComponent],
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.css']
})
export class FlightBookingComponent implements OnInit {

    origin: string = 'Curitiba';
    destination: string = 'São Paulo';
    startDate: string = '';
    endDate: string = '';
    passenger: number |null = 0;
    category: number |null = 0;

    flights: any[] = [];

    constructor(private cdr: ChangeDetectorRef) {}
    
    ngOnInit() {
      this.startDate = this.formatted();
      this.endDate = this.formatted();
    }

    async book() {
      try {
        const response = await FlightBookingService.getAvailables(
          this.origin,
          this.destination,
          this.startDate,
          this.passenger,
          this.category
        );

        const data = response?.data?.data;
        this.flights = data ? [...data] : [];
        this.cdr.detectChanges();

        if (!data || data.length === 0) {          
          this.showWarningAlert();
          return;
        }
        
        this.showSuccessAlert();       
    } catch (error) {      
      this.flights = []; 
      this.cdr.detectChanges();
       this.showWarningAlert();
    } 
  }

  validateCategory():boolean {
    return this.category === 0 ? false : true;
  }

  validatePassenger():boolean {
    return this.passenger === 0 ? false : true;
  }

  showSuccessAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Obaaaa!',
      text: 'Achamos voos do jeito que você está procurando!',
    });
  }

  showWarningAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Atenção',
      text: 'Nenhum voo encontrado.',
    });
  }

  formatted = () => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    const formatted = `${year}-${month}-${day}`;

    return formatted;
  }
}
