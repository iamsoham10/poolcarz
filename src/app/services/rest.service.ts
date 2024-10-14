import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private rideUrl = "https://poolcarz-backend.onrender.com/api/rideinfo";

  constructor(private http: HttpClient) { }

  //fetch all rides
  getRides(): Observable<any> {
    return this.http.get(this.rideUrl);
  }
}
