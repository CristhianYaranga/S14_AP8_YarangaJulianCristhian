import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // Controla si el navbar y footer se muestran
  // Se ocultan cuando el usuario está en la página de login
  mostrarNavbar: boolean = false;

  constructor(private router: Router) {
    // Escuchamos los cambios de ruta para saber cuándo estamos en /login
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.mostrarNavbar = !event.urlAfterRedirects.includes('/login');
      });
  }

  // ── MÉTODO DE CERRAR SESIÓN ──
  logout(): void {
    // Eliminamos el flag de sesión del localStorage
    localStorage.removeItem('isLoggedIn');
    // Redirigimos al usuario a la pantalla de login
    this.router.navigate(['/login']);
  }

  // Getter para saber si hay sesión activa
  get estaLogueado(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
