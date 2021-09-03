import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuarios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  usuario: Usuario;

  constructor(
    private httpClient: HttpClient
  ) { }

  validate(usuario: string, cedula: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${environment.api_url}/usuarios/validate/${usuario}/${cedula}`);
  }

  list(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${environment.api_url}/usuarios/list`);
  }

  get(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${environment.api_url}/usuarios/get/${id}`);
  }

  create(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(`${environment.api_url}/usuarios/create`, usuario);
  }

  update(usuario: Usuario): Observable<any> {
    return this.httpClient.patch<any>(`${environment.api_url}/usuarios/update`, usuario);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.api_url}/usuarios/delete/${id}`);
  }

}
