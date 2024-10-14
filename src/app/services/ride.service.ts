import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  private apiUrl = "https://poolcarz-backend.onrender.com/api/rides";

  constructor(private http: HttpClient) { }

  saveRide(ride: any): Observable<any> {
    return this.http.post(this.apiUrl, ride);
  }

  updateRide(ride: any): Observable<any> {
    const url = `https://poolcarz-backend.onrender.com/api/ride/${ride.id}`;
    return this.http.put(url, ride);
  }
}
