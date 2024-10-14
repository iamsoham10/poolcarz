import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = "https://poolcarz-backend.onrender.com/api/users";
  private saveUserUrl = "https://poolcarz-backend.onrender.com/api/user";

  constructor(private http: HttpClient) { }

  //fetch all users
  getUsers(): Observable<any> {
    return this.http.get(this.userUrl);
  }
  saveUser(user: any): Observable<any> {
    return this.http.post(this.saveUserUrl, user);
  }

  //validate the user
  validateUser(username: string, password: string): Observable<any> {
    return this.getUsers().pipe(
      map((users: any[]) => {
        return users.find(user => user.username === username && user.password === password);
      })
    );
  }
}
