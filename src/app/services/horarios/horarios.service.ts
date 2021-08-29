import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Horario } from 'src/app/interfaces/horario';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(profesionalId: number): Observable<Horario[]> {
    return this.httpClient.get<Horario[]>(`http://localhost/restapi/index.php/horarios/list/${profesionalId}`);
  }

  create(profesional: Horario): Observable<any> {
    return this.httpClient.post<any>("http://localhost/restapi/index.php/horarios/create", profesional);
  }

  update(profesional: Horario): Observable<any> {
    return this.httpClient.patch<any>("http://localhost/restapi/index.php/horarios/update", profesional);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost/restapi/index.php/horarios/delete/${id}`);
  }

}
