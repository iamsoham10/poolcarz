import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-ride',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './offer-ride.component.html',
  styleUrl: './offer-ride.component.css'
})
export class OfferRideComponent {
  constructor(private router: Router) { }


  seatsAvailable: number = 0;
  invalidSeatsNumber: boolean = false;
  onSubmit() {
    if (this.seatsAvailable <= 0 || this.seatsAvailable > 8) {
      this.invalidSeatsNumber = true;
    }
    else {
      this.invalidSeatsNumber = false;
      console.log("Form Submitted");
    }
  }
  goBack() {
    this.router.navigate(['/book-ride']);
    console.log("Went back");
  }
}
