import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  private apiUrl = "http://localhost:3000/api/rides";

  constructor(private http: HttpClient) { }

  saveRide(ride: any): Observable<any> {
    return this.http.post(this.apiUrl, ride);
  }

  updateRide(ride: any): Observable<any> {
    const url = `http://localhost:3000/api/ride/${ride.id}`;
    return this.http.put(url, ride);
  }
}
