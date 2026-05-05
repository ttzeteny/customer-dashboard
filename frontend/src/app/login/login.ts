import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    if (this.username && this.password) {
      this.authService.login({ username: this.username, password: this.password }).subscribe({
        next: (response) => {
          console.log('Login successful, token received!');
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          alert('Login failed: ' + (err.error || 'Wrong username or password'));
        }
      });
    } else {
      alert('Please enter your username and password.');
    }
  }
}