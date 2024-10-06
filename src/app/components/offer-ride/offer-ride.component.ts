import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RideService } from '../../services/ride.service';

@Component({
  selector: 'app-offer-ride',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './offer-ride.component.html',
  styleUrl: './offer-ride.component.css'
})
export class OfferRideComponent {
  constructor(private router: Router, private rideService: RideService) { }

  ride = {
    "id": null,
    "offerId": "",
    "name": "",
    "car": "",
    "seatsLeft": null,
    "pickUp": "",
    "destination": ""
  }
  seatsAvailable: number = 0;
  invalidSeatsNumber: boolean = false;
  isAdded: boolean = false;
  // onSubmit() {
  //   if (this.seatsAvailable <= 0 || this.seatsAvailable > 8) {
  //     this.invalidSeatsNumber = true;
  //   }
  //   else {
  //     this.invalidSeatsNumber = false;
  //     console.log("Form Submitted");
  //   }
  // }

  saveRide(): void {
    this.seatsAvailable = this.ride.seatsLeft ?? 0;
    this.rideService.saveRide(this.ride).subscribe(
      (response) => {
        if (this.seatsAvailable <= 0 || this.seatsAvailable > 8) {
          this.invalidSeatsNumber = true;
        }
        else {
          this.isAdded = true;
        }
      },
      (error) => {
        console.error('Error saving ride:', error);
      }
    )
  }

  goBack() {
    this.router.navigate(['/book-ride']);
    console.log("Went back");
  }
}
