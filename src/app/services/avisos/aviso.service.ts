import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aviso } from 'src/app/interfaces/aviso';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<Aviso[]> {
    return this.httpClient.get<Aviso[]>("http://localhost:8080/restapi/index.php/avisos/list");
  }

  create(aviso: Aviso): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8080/restapi/index.php/avisos/create", aviso);
  }

  update(aviso: Aviso): Observable<any> {
    return this.httpClient.patch<any>("http://localhost:8080/restapi/index.php/avisos/update",aviso);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/restapi/index.php/avisos/delete/${id}`);
  }

}