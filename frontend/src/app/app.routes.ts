import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Layout } from './layout/layout';
import { Customers } from './customers/customers';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login }, 
  { path: 'register', component: Register },

  { 
    path: 'dashboard', 
    component: Layout,
    canActivate: [AuthGuard],
    children: [
      { path: 'customers', component: Customers },
    ]
  },
  
  { path: '**', redirectTo: 'login' }
];