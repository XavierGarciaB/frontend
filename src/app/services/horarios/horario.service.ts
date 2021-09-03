import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  list(): Observable<Horario[]> {
    return this.httpClient.get<Horario[]>(`${environment.api_url}/horarios/list`);
  }

  create(horario: Horario): Observable<any> {
    return this.httpClient.post<any>(`${environment.api_url}/horarios/create`, horario);
  }

  update(horario: Horario): Observable<any> {
    return this.httpClient.patch<any>(`${environment.api_url}/horarios/update`,horario);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.api_url}/horarios/delete/${id}`);
  }

}