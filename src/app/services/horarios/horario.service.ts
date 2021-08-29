import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Horario } from 'src/app/interfaces/horario';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<Horario[]> {
    return this.httpClient.get<Horario[]>("http://localhost:8080/restapi/index.php/horarios/list");
  }

  create(horario: Horario): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/restapi/index.php/horarios/create", horario);
  }

  update(horario: Horario): Observable<any> {
    return this.httpClient.patch<any>("http://localhost:8080/restapi/index.php/horarios/update",horario);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/restapi/index.php/horarios/delete/${id}`);
  }

}