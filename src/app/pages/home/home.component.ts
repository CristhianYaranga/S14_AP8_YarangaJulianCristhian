import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section class="page-section">
      <h2>🏠 Inicio</h2>
      <p>Bienvenido a TechApp, tu plataforma de tecnología.</p>
    </section>
  `,
  styles: [`
    .page-section {
      padding: 2rem;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  `]
})
export class HomeComponent {}
