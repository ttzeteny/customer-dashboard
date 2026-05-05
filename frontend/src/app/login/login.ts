import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email && this.password) {
      console.log('Logging in with:', this.email);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Please enter your email and password.');
    }
  }
}