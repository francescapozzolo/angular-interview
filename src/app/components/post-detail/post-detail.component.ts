import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {

  data: any;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.route.params.subscribe(params => {
      console.log(params)
      this.getPost(params['id'])
    })
  }

  getPost(id: number) {
    this.postService.getPost(id)
      .subscribe((data: any) => {
        this.data = data
        console.log(data)
      })
  }

}
