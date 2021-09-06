import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesional } from 'src/app/interfaces/profesional';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {
  profesional: Profesional;

  constructor(
    private httpClient: HttpClient
  ) { }

  validate(id: number, nombre: string): Observable<Profesional> {
    return this.httpClient.get<Profesional>(`${environment.api_url}/profesionales/validate/${id}/${nombre}`);
  }

  list(): Observable<Profesional[]> {
    return this.httpClient.get<Profesional[]>(`${environment.api_url}/profesionales/list`);
  }

  get(id: number): Observable<Profesional> {
    return this.httpClient.get<Profesional>(`${environment.api_url}/profesionales/get/${id}`);
  }

  create(profesional: Profesional): Observable<any> {
    return this.httpClient.post<any>(`${environment.api_url}/profesionales/create`, profesional);
  }

  update(profesional: Profesional): Observable<any> {
    return this.httpClient.patch<any>(`${environment.api_url}/profesionales/update`, profesional);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.api_url}/profesionales/delete/${id}`);
  }

}
