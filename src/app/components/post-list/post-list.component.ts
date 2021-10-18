import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  posts: Post[] = [];

  constructor(private postService: PostService) {

    //Función que obtiene el listado de posteos
    this.postService.getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data
      })
    localStorage.setItem('comments', '[]')
  }
}
