import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usuario: Usuario = {
      id: 1,
      nombre: '',
      idSala: 1
    };

  constructor() { }

  ngOnInit() {
  }

}
