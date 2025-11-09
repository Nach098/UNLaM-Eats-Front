import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments'; // <-- ESTA ES LA RUTA CORRECTA

@Injectable({
  providedIn: 'root'
})
export class UsuarioService { // <-- Nota que la clase se llama "UsuarioService"

  // Construye la URL base del controlador de usuarios
  // -> https://localhost:32769/api/Usuario
  private apiUrl = `${environment.apiUrl}/Usuario`;

  // Inyecta HttpClient
  constructor(private http: HttpClient) { }

  /**
   * Llama al endpoint [HttpPost("Login")] de tu API
   */
  login(credenciales: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Login`, credenciales);
  }

  /**
   * Llama al endpoint [HttpPost("Create")] de tu API
   */
  registrar(datosUsuario: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Create`, datosUsuario);
  }

  /**
   * Llama al endpoint [HttpGet("GetAll")] de tu API
   */
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetAll`);
  }

  // ... (Aquí podrías agregar GetById, Update, Delete)
}
