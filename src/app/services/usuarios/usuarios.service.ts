import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuario: Usuario;

  constructor(
    private httpClient: HttpClient
  ) { }

  validate(usuario: string, cedula: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`http://localhost/restapi/index.php/usuarios/validate/${usuario}/${cedula}`);
  }

  list(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>("http://localhost/restapi/index.php/usuarios/list");
  }

  get(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`http://localhost/restapi/index.php/usuarios/get/${id}`);
  }

  create(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>("http://localhost/restapi/index.php/usuarios/create", usuario);
  }

  update(usuario: Usuario): Observable<any> {
    return this.httpClient.patch<any>("http://localhost/restapi/index.php/usuarios/update", usuario);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost/restapi/index.php/usuarios/delete/${id}`);
  }

}
