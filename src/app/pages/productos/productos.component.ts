import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  template: `
    <section class="page-section">
      <h2>📦 Productos</h2>
      <p>Explora nuestra línea de productos tecnológicos.</p>
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
export class ProductosComponent {}
