import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [],
  template: `
    <section class="page-section">
      <h2>⚙️ Servicios</h2>
      <p>Descubre todos los servicios que TechApp tiene para ti.</p>
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
export class ServiciosComponent {}
