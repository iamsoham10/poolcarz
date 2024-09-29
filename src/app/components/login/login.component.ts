import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RestService } from '../../services/rest.service';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  nameResponse: string = '';
  passResponse: string = '';
  finalResponse: boolean = false;
  rides!: any[];

  constructor(private router: Router, private restService: RestService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.restService.getUsers().subscribe(users => {
      const user = users.find(u => u.username === this.username && u.password === this.password);
    });
  }
}
