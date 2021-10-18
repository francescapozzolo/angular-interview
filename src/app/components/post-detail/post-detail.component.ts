import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {

  post: any;
  date!: Date;
  displayForm: boolean = false;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.route.params.subscribe(params => {
      this.getPost(params['id'])
    })
  }

  getPost(id: number) {
    this.postService.getPost(id)
      .subscribe((data: any) => {
        this.post = data
      })
  }

  printLastComment(date: Date) {
    this.date = date
  }

  showForm() {
    this.displayForm = true;
  }

}
