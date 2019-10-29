import { Component, OnInit } from '@angular/core';
import { Sala } from '../sala';
import { Router, ActivatedRoute, ParamMap} from '@angular/router'; 
import { SalaService } from '../sala.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    sala: Sala = {
      id: 0,
      titulo: '',
      autor: ''
    };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SalaService
  ) { }

  ngOnInit() {
  }

  private getSala() {
    //this.tareaService.getTareas().subscribe(tareasRecibidas => this.tareas = tareasRecibidas);
    //this.router.navigate([]);
    this.router.navigate(['/sala/', this.sala.id]);
  }

}
