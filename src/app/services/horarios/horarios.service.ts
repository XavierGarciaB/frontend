import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horario } from 'src/app/interfaces/horario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(profesionalId: number): Observable<Horario[]> {
    return this.httpClient.get<Horario[]>(`${environment.api_url}/horarios/list/${profesionalId}`);
  }

  get(horarioId: number): Observable<Horario> {
    return this.httpClient.get<Horario>(`${environment.api_url}/horarios/get/${horarioId}`);
  }
  
  create(profesional: Horario): Observable<any> {
    return this.httpClient.post<any>(`${environment.api_url}/horarios/create`, profesional);
  }

  update(profesional: Horario): Observable<any> {
    return this.httpClient.patch<any>(`${environment.api_url}/horarios/update`, profesional);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.api_url}/horarios/delete/${id}`);
  }

}
