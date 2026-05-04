import { Component, OnInit, signal } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  customers = signal<Customer[]>([]);

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
      this.customerService.getCustomers().subscribe({
        next: (data) => {
          console.log( 'Fetched customers:', data);
          this.customers.set(data);
        },
        error: (err) => console.error('Error fetching customers:', err)
      });
  }
}