import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resena } from 'src/app/interfaces/resena';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {

  constructor(
    private httpClient: HttpClient
  ) { }

  list(): Observable<Resena[]> {
    return this.httpClient.get<Resena[]>("http://localhost/restapi/index.php/resenas/list");
  }

  create(resena: Resena): Observable<any> {
    return this.httpClient.post<any>("http://localhost/restapi/index.php/resenas/create", resena);
  }

  update(resena: Resena): Observable<any> {
    return this.httpClient.patch<any>("http://localhost/restapi/index.php/resenas/update", resena);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost/restapi/index.php/resenas/delete/${id}`);
  }

}
