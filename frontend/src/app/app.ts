import { Component, OnInit, signal } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  customers = signal<Customer[]>([]);

  constructor(private customerService: CustomerService) {}

  newCustomer: Customer = { id: 0, name: '', email: '', status: 'Active' };

  ngOnInit(): void {
      this.customerService.getCustomers().subscribe({
        next: (data) => {
          console.log( 'Fetched customers:', data);
          this.customers.set(data);
        },
        error: (err) => console.error('Error fetching customers:', err)
      });
  }

  addCustomer(): void {
    if (this.newCustomer.name && this.newCustomer.email) {
      this.customerService.addCustomer(this.newCustomer).subscribe({
        next: (addedCustomer) => {
          this.customers.set([...this.customers(), addedCustomer]);
          this.newCustomer = { id: 0, name: '', email: '', status: 'Active' };
        },
        error: (err) => console.error('Error adding customer:', err)
      });
    }
  }

  deleteCustomer(id: number): void {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(id).subscribe({
        next: () => {
          this.customers.update(prevCustomers =>
            prevCustomers.filter(customer => customer.id !== id)
          );
        },
        error: (err) => console.error('Error deleting customer:', err)
      });
    }
  }
}