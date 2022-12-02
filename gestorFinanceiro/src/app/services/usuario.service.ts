import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Usuario } from 'src/Models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  mostraUsuario(): Observable<Usuario[ ]>
  {
    return this.http.get<Usuario[ ]>("http://localhost:3000/usuario");
  }

  criaUsuario(usuario: Usuario): Observable<Usuario>
  {
    return this.http.post<Usuario>("http://localhost:3000/usuario", usuario);
  }

  deleteUsuario(id: number): Observable<any>
  {
    return this.http.delete(`http://localhost:3000/usuario/${id}`);
  }

  editaUsuario(usuario: Usuario): Observable<Usuario>
  {
    if (!usuario.id) {
      return EMPTY;
    }

    return this.http.put<Usuario>(`http://localhost:3000/usuario/${usuario.id}`, usuario);
  }
}
