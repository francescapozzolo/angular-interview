import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any[] = [];
  loading: boolean = false;

  @Input() postId!: number;
  @Output() showForm: EventEmitter<boolean>

  constructor(private postService: PostService) {
    this.showForm = new EventEmitter();
  }

  ngOnInit(): void {
    if ((this.postService.loadStorage()).length > 0) {
      this.loading = true;
      this.comments = this.postService.loadStorage();
      this.loading = false
    } else {
      this.postService.getComments(this.postId)
        .subscribe((data: any) => {
          this.loading = true;
          this.postService.comments = data
          this.comments = data
          this.postService.saveStorage();
          this.loading = false
        })
    }
  }

  //Función que emite el evento para mostrar el formulario
  displayForm() {
    this.showForm.emit()
  }

  deleteComment(id: number) {
    this.comments = this.comments.filter((comment: Comment) => comment.id !== id)
    this.postService.comments = this.comments
    this.postService.saveStorage();
  }
}
