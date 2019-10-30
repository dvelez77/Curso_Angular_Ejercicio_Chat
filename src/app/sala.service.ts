import { Injectable } from '@angular/core';
import { Sala } from './sala';
import { Comentario } from './Comentario';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  urlSalas = 'http://localhost:3000/salas';
  urlComentarios = 'http://localhost:3000/comentarios';
  urlUsuarios = 'http://localhost:3000/usuario';
  sala: Sala;

  constructor(private http: HttpClient) { }

  getSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.urlSalas).pipe(
      catchError(
        (err, caught) => {
          alert('Ha habido un error en la conexión a las salas: ' + err.message);
          console.warn(err);
          console.warn(caught);
          return of([]);
        }
      )
    );
  }

  getComentarios(idSala: number): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.urlComentarios).pipe(
    catchError(
      (err, caught) => {
        alert('Ha habido un error en la conexión a las comentarios: ' + err.message);
        console.warn(err);
        console.warn(caught);
        return of([]);
      }
    )
  );
}

}
