import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  posts: any[] = [];

  constructor(private postService: PostService) {

    //Función que obtiene el listado de comentarios
    this.postService.getPosts()
      .subscribe((data: any) => {
        this.posts = data
      })
  }
}
