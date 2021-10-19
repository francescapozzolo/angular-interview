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
  loading: boolean = true;

  constructor(private postService: PostService) {

    //Función que obtiene el listado de posteos
    this.postService.getPosts()
      .subscribe((data: Post[]) => {
        console.log(data)
        this.loading = true
        this.posts = data
        this.loading = false
      })
    localStorage.setItem('comments', '[]')
  }
}
