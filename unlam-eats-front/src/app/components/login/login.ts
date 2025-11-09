import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <-- 1. Importar Router
import { UsuarioService } from '../../services/usuario.service'; // <-- 2. Importar Servicio
import { FormsModule } from '@angular/forms'; // <-- 3. Importar FormsModule
import { CommonModule } from '@angular/common'; // <-- 4. Importar CommonModule

@Component({
  selector: 'app-login',
  standalone: true, // <-- 5. Marcar como Standalone
  imports: [FormsModule, CommonModule], // <-- 6. Añadir imports
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  // 7. Objeto para almacenar los datos del formulario
  loginData = {
    email: '',
    password: ''
  };

  // 8. Inyectar el Servicio y el Router
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  // 9. Función que se llama al enviar el formulario
  onSubmit() {
    // Llama al servicio de login con los datos
    this.usuarioService.login(this.loginData).subscribe(
      (response) => {
        // ÉXITO: El login fue correcto
        console.log('Login exitoso!', response);
        // Aquí podrías guardar el token (si tu API lo devuelve)
        // y redirigir a una página de "home"
        // this.router.navigate(['/home']); 
      },
      (error) => {
        // ERROR: El login falló
        console.error('Error en el login:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    );
  }

  // 10. Función para ir a la página de registro
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
