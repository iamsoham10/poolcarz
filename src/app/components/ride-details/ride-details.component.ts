import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ride-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ride-details.component.html',
  styleUrl: './ride-details.component.css',
})
export class RideDetailsComponent {
  @Input() isVisible!: boolean;
  @Input() rideSelected: any;
  @Input() bookRide: any;
  @Output() hideTable = new EventEmitter<boolean>();

  confirmBooking: string = 'Booking Done. Your Booking id: 101';
  showBookingMsg: boolean = false;
  bookButtonStyle = {};

  bookRideButton() {
    this.bookRide = !this.bookRide;
    this.showBookingMsg = true;
    this.changeBookButtonStyle();
    this.hideTable.emit(true);
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
