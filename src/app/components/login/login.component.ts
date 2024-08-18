import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }
  // onLogin() {
  //   if (this.username === 'admin' && this.password === 'admin') {
  //     this.router.navigate(['/book-ride']);
  //   }
  //   else {
  //     alert('Invalid Username or Password');
  //   }
  // }

  users: any[] = [
    { username: 'admin', password: 'admin' },
    { username: 'soham', password: 'soham' },
    { username: 'sam', password: 'sam' },
    { username: 'root', password: 'root' },
    { username: 'user', password: 'user' },
  ]

  onLogin() {
    if (this.users.find(u => u.username === this.username && u.password === this.password)) {
      alert(`Welcome ${this.username}`);
      this.router.navigate(['/book-ride']);
    }
    else {
      alert('Invalid username or password');
    }
  }
}
