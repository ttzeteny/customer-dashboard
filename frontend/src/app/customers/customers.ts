import { Component, OnInit, signal, computed } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customers.html',
  styleUrls: ['./customers.css']
})
export class Customers implements OnInit {
  customers = signal<Customer[]>([]);

  constructor(private customerService: CustomerService) {}

  newCustomer: Customer = { id: 0, name: '', email: '', status: 'Active' };

  editingCustomerId: number | null = null;
  editingCustomer: Customer = { id: 0, name: '', email: '', status: 'Active' };

  searchTerm = signal('');

  filteredCustomers = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.customers().filter(c =>
      c.name.toLowerCase().includes(term) || c.email.toLowerCase().includes(term)
    );
  });

  totalCount = computed(() => this.customers().length);
  activeCount = computed(() => this.customers().filter(c => c.status === 'Active').length);
  inactiveCount = computed(() => this.customers().filter(c => c.status === 'Inactive').length);

  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

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

  startEdit(customer: Customer): void {
    this.editingCustomerId = customer.id;
    this.editingCustomer = { ...customer };
  }

  cancelEdit(): void {
    this.editingCustomerId = null;
  }

  saveEdit(): void {
    if (this.editingCustomerId !== null) {
      this.customerService.updateCustomer(this.editingCustomer).subscribe({
        next: () => {
          this.customers.update(prev =>
            prev.map(c => c.id === this.editingCustomerId ? { ...this.editingCustomer} : c)
          );

          this.editingCustomerId = null;
        },
        error: (err) => console.error('Error updating customer:', err)
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