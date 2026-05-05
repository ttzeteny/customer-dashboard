import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username: string = '';
  password: string = ''
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {

    if (this.password !== this.confirmPassword) {
      alert('Error: Passwords do not match!');
      return;
    }

    if (this.username && this.password) {
      this.authService.register({ username: this.username, password: this.password }).subscribe({
        next: () => {
          alert('Registration successful! You can now log in.');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          alert('Registration failed: ' + (err.error?.message || 'Unknown error'));
        }
      });
    }
  }
}
