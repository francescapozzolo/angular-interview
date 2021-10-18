import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  postId!: number;

  @Output() showForm: EventEmitter<boolean>

  comments: any[] = [];

  constructor(private postService: PostService) {
    this.showForm = new EventEmitter();
  }

  ngOnInit(): void {
    this.postService.getComments(this.postId)
      .subscribe((data: any) => {
        this.comments = data
      })
  }

  displayForm() {
    this.showForm.emit()
  }
}
