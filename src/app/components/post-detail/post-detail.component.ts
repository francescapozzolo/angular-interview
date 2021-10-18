import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {

  post!: Post;
  date!: Date;
  displayForm: boolean = false;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.route.params.subscribe(params => {
      this.getPost(params['id'])
    })
  }

  //Función que obtiene los detalles del posteo
  getPost(id: number) {
    this.postService.getPost(id)
      .subscribe((post: Post) => {
        this.post = post
      })
  }

  //Función que imprime la fecha del último posteo
  printLastComment(date: Date) {
    this.date = date
  }

  //Función que muestra el formulario para agregar nuevo comentario
  showForm() {
    this.displayForm = true;
  }
}
