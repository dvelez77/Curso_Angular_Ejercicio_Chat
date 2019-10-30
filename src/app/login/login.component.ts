import { Component, OnInit, OnDestroy } from '@angular/core';
import { Sala } from '../sala';
import { Usuario } from '../Usuario';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { SalaService } from '../sala.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    usuario: Usuario = {
      nombre: ''
    };

    salas: Sala[];

    s: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private salaService: SalaService
  ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnDestroy() {
    this.s.unsubscribe();
  }

  private getSala() {
    this.s = this.salaService.getSalas().subscribe(
        salasRecibidas => {
          this.salas = salasRecibidas;
          if (this.salas.length > 0) {
            const salaUsuario = this.salas.find(item => item.autor === this.usuario.nombre);
            if (salaUsuario != null) {
              this.router.navigate(['/sala/', salaUsuario.id]);
            } else {
              alert('no se encontraron salas para el usuario');
              // TODO -> Crear usuario y enviarle a la sala por defecto
            }
          } else {
            alert('no se encontraron salas para el usuario');
            // TODO -> Crear usuario y enviarle a la sala por defecto
          }
        }
    );
  }

}
