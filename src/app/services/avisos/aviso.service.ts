import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aviso } from 'src/app/interfaces/aviso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<Aviso[]> {
    return this.httpClient.get<Aviso[]>(`${environment.api_url}/avisos/list`);
  }

  listById(id: number):Observable<Aviso>{
    return this.httpClient.get<Aviso>(`${environment.api_url}/avisos/get/${id}`);
  }

  listByProfesionalAvisos(id: number): Observable<Aviso[]> {
    return this.httpClient.get<Aviso[]>(`${environment.api_url}/avisos/list/${id}`);
  }

  create(aviso: Aviso): Observable<any> {
    return this.httpClient.post<any>(`${environment.api_url}/avisos/create`, aviso);
  }

  update(aviso: Aviso): Observable<any> {
    return this.httpClient.patch<any>(`${environment.api_url}/avisos/update`,aviso);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.api_url}/avisos/delete/${id}`);
  }

}