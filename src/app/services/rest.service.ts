import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private userUrl = 'assets/users.json';
  private rideUrl = "http://localhost:3000/api/rideinfo";

  constructor(private http: HttpClient) { }

  //fetch all users
  getUsers(): Observable<any> {
    return this.http.get(this.userUrl);
  }

  //validate the user
  validateUser(username: string, password: string): Observable<any> {
    return this.getUsers().pipe(
      map((users: any[]) => {
        return users.find(user => user.username === username && user.password === password);
      })
    );
  }

  //fetch all rides
  getRides(): Observable<any> {
    return this.http.get(this.rideUrl);
  }
}
