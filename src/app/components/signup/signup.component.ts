import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private userService: UserService) { }
  showUserSaveMesg: boolean = false;

  userRegisterForm: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
  });

  saveUser(): void {
    if (this.userRegisterForm.valid) {
      this.userService.saveUser(this.userRegisterForm.value).subscribe(
        (response) => {
          this.showUserSaveMesg = true;
        },
        (error) => {
          console.error("Error saving user");
        }
      )
    }
  }
}
