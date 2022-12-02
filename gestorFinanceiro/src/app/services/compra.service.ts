import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Compra } from 'src/Models/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {


  constructor(private http: HttpClient) { }

  listar(): Observable<Compra[ ]>
  {
    return this.http.get<Compra[ ]>("http://localhost:3000/compra");
  }

  inserir(compra: Compra): Observable<Compra>
  {
    return this.http.post<Compra>("http://localhost:3000/compra", compra);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`"http://localhost:3000/compra/${id}"`);
  }

  atualizar(compra: Compra): Observable<Compra> {
    if (!compra.id) {
      return EMPTY;
    }

    return this.http.put<Compra>(`"http://localhost:3000/compra/${compra.id}"`, compra);
  }
}
