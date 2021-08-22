import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesional } from 'src/app/interfaces/profesional';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<Profesional[]> {
    return this.httpClient.get<Profesional[]>("http://localhost/restapi/index.php/profesionales/list");
  }

  create(profesional: Profesional): Observable<any> {
    return this.httpClient.post<any>("http://localhost/restapi/index.php/profesionales/create", profesional);
  }

  update(profesional: Profesional): Observable<any> {
    return this.httpClient.patch<any>("http://localhost/restapi/index.php/profesionales/update", profesional);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost/restapi/index.php/profesionales/delete/${id}`);
  }

}
