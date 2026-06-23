import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  // Formulario reactivo
  loginForm: FormGroup;

  // Variable para mostrar error de credenciales incorrectas
  errorCredenciales: string = '';

  // Variable para controlar la visibilidad de la contraseña
  mostrarPassword: boolean = false;

  // Credenciales simuladas (en una app real vendría de un servicio/API)
  private readonly CREDENCIALES_VALIDAS = {
    email: 'admin@miapp.com',
    password: '123456'
  };

  constructor(private fb: FormBuilder, private router: Router) {
    // Construimos el formulario con sus validaciones
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)]
      ]
    });
  }

  // Getters para acceder fácilmente a los controles en el HTML
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Alternar visibilidad de la contraseña
  togglePassword(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    // Limpiamos el error previo
    this.errorCredenciales = '';

    // Si el formulario tiene errores de validación, lo marcamos como "tocado"
    // para que se muestren los mensajes de error
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    // Verificamos las credenciales
    if (
      email === this.CREDENCIALES_VALIDAS.email &&
      password === this.CREDENCIALES_VALIDAS.password
    ) {
      // ✅ Credenciales correctas → guardamos sesión y redirigimos a /home
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/home']);
    } else {
      // ❌ Credenciales incorrectas → mostramos mensaje de error
      this.errorCredenciales = 'Correo o contraseña incorrectos. Intenta de nuevo.';
    }
  }
}
