import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MouseHoverDirective } from './mouse-hover.directive';
import { RideFilterPipe } from './ride-filter.pipe';
import { RideDetailsComponent } from '../ride-details/ride-details.component';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-book-ride',
  standalone: true,
  imports: [
    CommonModule,
    MouseHoverDirective,
    RideFilterPipe,
    RideDetailsComponent,
  ],
  templateUrl: './book-ride.component.html',
  styleUrl: './book-ride.component.css',
})
export class BookRideComponent implements OnInit {
  constructor(private router: Router, private restService: RestService) { }

  rideFilter: string = '';
  isButtonVisible: boolean = false;
  isOfficeButtonOn: boolean = false;
  isRideInfoTableVisible: boolean = false;
  isToOfficeTableVisible: boolean = false;
  isFromOfficeTableVisible: boolean = false;
  isOtherTableVisible: boolean = false;
  rideSelected: any = null;
  showRideDetails: boolean = false;

  rideInfo: any[] = [];

  ngOnInit(): void {
    this.restService.getRides().subscribe(
      (rideData) => {
        this.rideInfo = rideData;
      },
      (error) => {
        console.error('Error fetching ride data: ', error);
      }
    )
  }

  toggleRideButton() {
    if (this.isRideInfoTableVisible) {
      // Hide the table if it's already visible
      this.isRideInfoTableVisible = false;
      this.isButtonVisible = false;
    } else {
      // Show the "All Rides" table and hide the "To Office" table
      this.isRideInfoTableVisible = true;
      this.isToOfficeTableVisible = false;
      this.isButtonVisible = true;
    }
  }
  toggleToOfficeButton() {
    if (this.isToOfficeTableVisible) {
      // Hide the table if it's already visible
      this.isToOfficeTableVisible = false;
      this.rideFilter = '';
    } else {
      // Show the "To Office" table and hide the "All Rides" table
      this.isToOfficeTableVisible = true;
      this.isRideInfoTableVisible = true;
      this.rideFilter = 'To Office';
    }
  }
  toggleFromOfficeButton() {
    if (this.isFromOfficeTableVisible) {
      // Hide the table if it's already visible
      this.isFromOfficeTableVisible = false;
      this.rideFilter = '';
    } else {
      // Show the "To Office" table and hide the "All Rides" table
      this.isFromOfficeTableVisible = true;
      this.isRideInfoTableVisible = true;
      this.rideFilter = 'From Office';
    }
  }

  toggleOtherButton() {
    if (this.isOtherTableVisible) {
      // Hide the table if it's already visible
      this.isOtherTableVisible = false;
      this.rideFilter = '';
    } else {
      // Show the "To Office" table and hide the "All Rides" table
      this.isOtherTableVisible = true;
      this.isRideInfoTableVisible = true;
      this.rideFilter = 'Other';
    }
  }

  selectRide(ride: any) {
    if (this.rideSelected === ride) {
      this.rideSelected = null;
    }
    this.showRideDetails = !this.showRideDetails;
    this.rideSelected = ride;
  }

  hideRideInfoTable(isHidden: boolean) {
    if (isHidden) {
      this.isRideInfoTableVisible = !this.isRideInfoTableVisible;
    }
  }

  offerRide() {
    this.router.navigate(['/offer-ride']);
  }
}
