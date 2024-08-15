import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BookRideComponent } from './components/book-ride/book-ride.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, BookRideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pool-carz';
}
