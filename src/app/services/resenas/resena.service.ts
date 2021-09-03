import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resena } from 'src/app/interfaces/resena';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<Resena[]> {
    return this.httpClient.get<Resena[]>(`${environment.api_url}/resenas/list`);
  }

  listByProfesional(id: number): Observable<Resena[]> {
    return this.httpClient.get<Resena[]>(`${environment.api_url}/resenas/list/${id}`);
  }

  create(resena: Resena): Observable<any> {
    return this.httpClient.post<any>(`${environment.api_url}/resenas/create`, resena);
  }

  update(resena: Resena): Observable<any> {
    return this.httpClient.patch<any>(`${environment.api_url}/resenas/update`, resena);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.api_url}/resenas/delete/${id}`);
  }

}
