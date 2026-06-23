import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  template: `
    <section class="page-section">
      <h2>📬 Contacto</h2>
      <p>¿Tienes preguntas? ¡Contáctanos!</p>
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
export class ContactoComponent {}
