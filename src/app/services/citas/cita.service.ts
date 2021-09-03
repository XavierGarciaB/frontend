import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from 'src/app/interfaces/cita';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(cita) {
    return this.httpClient.get<Cita[]>(`${environment.api_url}/citas/list`,cita);
  }

  create(cita: Cita): Observable<any> {
    return this.httpClient.post<any>(`${environment.api_url}/citas/create`, cita);
  }

  update(cita: Cita): Observable<any> {
    return this.httpClient.patch<any>(`${environment.api_url}/citas/update`, cita);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.api_url}/citas/delete/${id}`);
  }

}
