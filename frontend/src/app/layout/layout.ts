import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  constructor(private authService: AuthService, private router: Router) {}

  onLogout(event: Event) {
    event.preventDefault();
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}