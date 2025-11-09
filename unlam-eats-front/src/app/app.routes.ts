// En: src/app/app.routes.ts
import { Routes } from '@angular/router';
<<<<<<< Updated upstream
import { authGuard, clientGuard, ownerGuard, deliveryGuard } from './core/guards/auth-guards';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./features/auth/register/register').then(m => m.RegisterComponent)
  },
  {
    path: 'client',
    canActivate: [authGuard, clientGuard],
    loadComponent: () => import('./features/client/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'owner',
    canActivate: [authGuard, ownerGuard],
    loadComponent: () => import('./features/owner/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'delivery',
    canActivate: [authGuard, deliveryGuard],
    loadComponent: () => import('./features/delivery/dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'productos',
    loadComponent: () => import('./pages/producto-list/producto-list')
                            .then(m => m.ProductoListComponent)
  },
  { 
    path: 'productos/nuevo', 
    loadComponent: () => import('./pages/producto-form/producto-form') 
                            .then(m => m.ProductoForm) 
  },
  { 
    path: 'productos/editar/:id', 
    loadComponent: () => import('./pages/producto-form/producto-form')
                            .then(m => m.ProductoForm) 
  },
  {
    path: 'restaurantes/:id',
    loadComponent: () => import('./features/restaurantes/detail/detail').then(m => m.RestauranteDetailComponent)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout').then(m => m.CheckoutComponent)
  },
  { path: '**', redirectTo: '' }
=======
// <-- 1. IMPORTA LAS CLASES CORRECTAS
import { Login } from './components/login/login'; // Sin .component
import { Register } from './components/register/register'; // Sin .component

export const routes: Routes = [
  {
    path: 'login',
    component: Login // <-- Usa la clase "Login"
  },
  {
    path: 'register',
    component: Register // <-- Usa la clase "Register"
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
>>>>>>> Stashed changes
];
