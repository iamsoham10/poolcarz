import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-ride-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ride-details.component.html',
  styleUrl: './ride-details.component.css',
})
export class RideDetailsComponent {
  constructor(private restService: RestService) { }
  @Input() isVisible!: boolean;
  @Input() rideSelected: any;
  @Input() bookRide: any;
  @Output() hideTable = new EventEmitter<boolean>();

  confirmBooking: string = 'Booking Done. Your Booking id: 101';
  showBookingMsg: boolean = false;
  bookButtonStyle = {};

  bookRideButton() {
    if (this.showBookingMsg) {
      this.isVisible = false;
      this.rideSelected = null;
      console.log(this.rideSelected);
      this.rideSelected.seatsLeft = this.rideSelected.seatsLeft + 1;
    }
    this.bookRide = !this.bookRide;
    this.showBookingMsg = !this.showBookingMsg;
    this.changeBookButtonStyle();
    this.hideTable.emit(true);
    this.rideSelected.seatsLeft = this.rideSelected.seatsLeft - 1;
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
