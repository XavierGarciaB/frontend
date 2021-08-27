import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/interfaces/cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(cita) {
    return this.httpClient.get<Cita[]>("http://localhost/restapi/index.php/citas/list",cita);
  }

  create(cita: Cita): Observable<any> {
    return this.httpClient.post<any>("http://localhost/restapi/index.php/citas/create", cita);
  }

  update(cita: Cita): Observable<any> {
    return this.httpClient.patch<any>("http://localhost/restapi/index.php/citas/update", cita);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost/restapi/index.php/citas/delete/${id}`);
  }

}
