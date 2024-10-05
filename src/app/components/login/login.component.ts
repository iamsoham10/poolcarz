import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RestService } from '../../services/rest.service';

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
  touchResponse: string = 'This field is required';
  errorMessage: string = '';
  finalResponse: boolean = false;
  rides!: any[];

  constructor(private router: Router, private restService: RestService) { }

  login() {
    this.restService.validateUser(this.username, this.password).subscribe(
      (user) => {
        if (user) {
          this.router.navigate(['/book-ride']);
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
      (error) => {
        console.error('Error fetching users: ', error);
        this.errorMessage = 'An error occured. Please try again.';
      }
    )
  }
}
