import { Component, OnInit } from '@angular/core';
import { SalaService } from '../sala.service';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from '../Comentario';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  comentarios: Comentario[];

  constructor(
    private route: ActivatedRoute,
    private salaService: SalaService) { }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');

    if (id !== 0) {
      this.salaService.getComentarios(id).subscribe(
        comentariosRecibidos => this.comentarios = comentariosRecibidos
      );
  }
}

}
