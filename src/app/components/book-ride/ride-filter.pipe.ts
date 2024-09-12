import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rideFilter',
  standalone: true,
})
export class RideFilterPipe implements PipeTransform {
  transform(rides: any[], filter: string): any[] {
    if (!rides) {
      return [];
    }
    if (!filter) {
      return rides; // No filtering, return all rides
    }
    return rides.filter((ride) => {
      if (filter === 'To Office') {
        return ride.destination === 'Office';
      } else if (filter === 'From Office') {
        return ride.pickUp === 'Office';
      } else if (filter === 'Other') {
        return ride.destination !== 'Office' && ride.pickUp !== 'Office';
      } else {
        return []; // Return empty array if filter is not recognized
      }
    });
  }
}
