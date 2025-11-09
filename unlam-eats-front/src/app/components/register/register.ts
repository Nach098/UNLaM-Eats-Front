import { Component } from '@angular/core';
import { Router } from '@angular/router'; // <-- 1. Importar Router
import { UsuarioService } from '../../services/usuario.service'; // <-- 2. Importar Servicio
import { FormsModule } from '@angular/forms'; // <-- 3. Importar FormsModule
import { CommonModule } from '@angular/common'; // <-- 4. Importar CommonModule

@Component({
  selector: 'app-register',
  standalone: true, // <-- 5. Marcar como Standalone
  imports: [FormsModule, CommonModule], // <-- 6. Añadir imports
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  // 7. Objeto para los datos del formulario de registro
  //    ¡Asegúrate de que coincida con lo que espera tu API!
  registerData = {
    nombreUsuario: '',
    email: '',
    password: ''
    // ... (agrega otros campos si tu API los requiere)
  };

  // 8. Inyectar el Servicio y el Router
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  // 9. Función que se llama al enviar el formulario
  onSubmit() {
    // Llama al servicio de registrar con los datos
    this.usuarioService.registrar(this.registerData).subscribe(
      (response) => {
        // ÉXITO: El usuario fue creado
        console.log('¡Registro exitoso!', response);

        // (Opcional) Muestra un mensaje de éxito
        alert('¡Usuario registrado con éxito! Ahora puedes iniciar sesión.');

        // Redirige al login
        this.router.navigate(['/login']);
      },
      (error) => {
        // ERROR: El registro falló
        console.error('Error en el registro:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
        alert('Error en el registro. Revisa la consola para más detalles.');
      }
    );
  }

  // 10. Función para volver a la página de login
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
