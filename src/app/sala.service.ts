import { Injectable } from '@angular/core';
import { Sala } from './sala';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  url = 'http://localhost:3000/tareas/';
  sala: Sala;

  constructor(private http: HttpClient) { }

  getSala(): Observable<Sala> {
    return this.http.get<Sala>(this.url).pipe(
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
}
