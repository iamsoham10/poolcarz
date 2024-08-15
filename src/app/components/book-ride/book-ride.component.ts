import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MouseHoverDirective } from './mouse-hover.directive';

@Component({
  selector: 'app-book-ride',
  standalone: true,
  imports: [CommonModule, MouseHoverDirective],
  templateUrl: './book-ride.component.html',
  styleUrl: './book-ride.component.css'
})
export class BookRideComponent {
  isButtonVisible: boolean = false;

  rideInfo: any[] = [
    { id: 1, offerId: "abc", name: "Yash", car: "Swift", seatsLeft: 2, pickUp: "Station", destination: "Office" },
    { id: 1, offerId: "xyz", name: "Aditya", car: "Santro", seatsLeft: 1, pickUp: "Bus Stand", destination: "Home" },
    { id: 1, offerId: "mno", name: "Bhavesh", car: "Waganor", seatsLeft: 1, pickUp: "Aarey Road", destination: "Shivaji Nagar" },
    { id: 1, offerId: "pqr", name: "Sumit", car: "Innova", seatsLeft: 3, pickUp: "M. G. Chouk", destination: "Lavel" },
    { id: 1, offerId: "jkl", name: "Tejas", car: "Fortuner", seatsLeft: 4, pickUp: "Sector 16", destination: "Station" },
  ];

  toggleRideButton() {
    this.isButtonVisible = !this.isButtonVisible;
  }
}
