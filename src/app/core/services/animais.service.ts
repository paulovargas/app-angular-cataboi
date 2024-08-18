import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(
    private http: HttpClient
  ) { }

  verTodosAnimais(page: number, size: number, sortBy: string): Observable<any>{

    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

    return this.http.get<any>(`${API}/animais`, { params });
  }

  /* verTodasPropriedades(page: number, size: number, sortBy: string): Observable<any>{

    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy);

    return this.http.get<any>(`${API}/propriedades`, { params });
  } */
}
