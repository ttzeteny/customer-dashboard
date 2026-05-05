import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Layout } from './layout/layout';
import { Customers } from './customers/customers';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  { path: 'login', component: Login },
  
  { 
    path: 'dashboard', 
    component: Layout,
    children: [
      { path: 'customers', component: Customers },
    ]
  },
  
  { path: '**', redirectTo: 'login' }
];