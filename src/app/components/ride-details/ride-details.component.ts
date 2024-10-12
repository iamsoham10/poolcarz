import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { RideService } from '../../services/ride.service';

@Component({
  selector: 'app-ride-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ride-details.component.html',
  styleUrl: './ride-details.component.css',
})
export class RideDetailsComponent {
  constructor(private restService: RestService, private rideService: RideService) { }
  @Input() isVisible!: boolean;
  @Input() rideSelected: any;
  @Input() bookRide: any;
  @Output() hideTable = new EventEmitter<boolean>();

  confirmBooking: string = 'Booking Done. Your Booking id: 101';
  showBookingMsg: boolean = false;
  bookButtonStyle = {};

  bookRideButton() {
    if (this.bookRide) {
      this.rideSelected.seatsLeft = this.rideSelected.seatsLeft - 1;
      this.isVisible = true;
      this.hideTable.emit(true);
      this.rideService.updateRide(this.rideSelected).subscribe(
        response => {
          console.log('Ride updated successfully');
          this.showBookingMsg = true;
          this.bookRide = false;
          this.changeBookButtonStyle();
        },
        error => {
          console.error('Error updating ride: ', error);
        }
      )
    }
    else {
      this.bookRide = !this.bookRide;
      this.showBookingMsg = !this.showBookingMsg;
      this.changeBookButtonStyle();
      this.hideTable.emit(true);
      this.rideSelected.seatsLeft = this.rideSelected.seatsLeft + 1;
      this.rideSelected = null;
      this.isVisible = false;
    }
  }
  changeBookButtonStyle() {
    if (!this.bookRide) {
      this.bookButtonStyle = {
        'background-color': 'red',
      };
    } else {
      this.bookButtonStyle = {
        'background-color': 'blue',
      };
      this.showBookingMsg = false;
    }
  }
}
