import { Component, OnInit } from '@angular/core';
import { Comentario } from '../Comentario';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { SalaService } from '../sala.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  cm: Comentario = {
    id: 0,
    comentario: '',
    salaId: 1
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private salaService: SalaService
  ) { }

  ngOnInit() {
  }

  sendComment() {
    this.salaService.sendComentario(this.cm).subscribe(
      comentarioRecibido => this.cm = { id: 0, comentario: '', salaId: 1 }
    );
  }
}
