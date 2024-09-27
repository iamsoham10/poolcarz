import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  nameResponse: string = '';
  passResponse: string = '';
  finalResponse: boolean = false;

  constructor(private router: Router) { }
  users: any[] = [
    { username: 'admin', password: 'admin' },
    { username: 'soham', password: 'soham' },
    { username: 'sam', password: 'sam' },
    { username: 'root', password: 'root' },
    { username: 'user', password: 'user' },
  ]

  onLogin() {
    if (this.username === '' && this.password === '') {
      this.nameResponse = 'Username is required';
      this.passResponse = 'Password is required';
      return;
    } else if (this.username === '') {
      this.nameResponse = 'Username is required';
      return;
    } else if (this.password === '') {
      this.passResponse = 'Password is required';
      return;
    }
    const user = this.users.find(u => u.username === this.username && u.password === this.password);
  
    if (user) {
      this.finalResponse = false;
      alert(`Welcome ${this.username}`);
      this.router.navigate(['/book-ride']);
    } else {
      this.finalResponse = true;
    }
  }
}
