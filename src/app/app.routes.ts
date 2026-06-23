import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Productos } from './pages/productos/productos';
import { Servicios } from './pages/servicios/servicios';
import { Contacto } from './pages/contacto/contacto';
import { Login } from './pages/login/login';

export const routes: Routes = [
  // La ruta raíz ahora redirige a /login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Ruta del Login
  { path: 'login', component: Login },

  // Rutas principales de la app
  { path: 'home',      component: Home },
  { path: 'productos', component: Productos },
  { path: 'servicios', component: Servicios },
  { path: 'contacto',  component: Contacto },

  // Cualquier ruta desconocida → redirige a /login
  { path: '**', redirectTo: 'login' }
];
