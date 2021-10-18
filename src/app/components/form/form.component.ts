import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/models/comment.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newCommentForm!: FormGroup;
  date!: Date;

  @Input() postId!: number;

  @Output() setDate: EventEmitter<Date>;

  constructor(private formBuilder: FormBuilder, private postService: PostService) {
    this.setDate = new EventEmitter();
    this.createForm();
    this.sendComment();
  }

  ngOnInit(): void {
  }

  //Validaciones de formulario
  get invalidName() {
    return this.newCommentForm.get('name')?.invalid && this.newCommentForm.get('name')?.touched
  }

  get invalidEmail() {
    return this.newCommentForm.get('email')?.invalid && this.newCommentForm.get('email')?.touched
  }

  get invalidMessage() {
    return this.newCommentForm.get('body')?.invalid && this.newCommentForm.get('body')?.touched
  }

  //Creación del formulario
  createForm() {
    this.newCommentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      body: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  saveComment() {
    let newComment: Comment
    if (this.newCommentForm.invalid) {
      return Object.values(this.newCommentForm.controls).forEach(control => {
        control.markAsTouched();
      })
    }
    //Reseteo formulario
    this.date = new Date();
    this.setDate.emit(this.date);
    this.postService.addComment({
      body: this.newCommentForm.controls['body'].value,
      email: this.newCommentForm.controls['email'].value,
      id: this.postService.comments[this.postService.comments.length - 1].id + 1,
      name: this.newCommentForm.controls['name'].value,
      postId: this.postId,
      isEditable: true,
    })
    this.newCommentForm.reset();
  }

  //Enviar los datos del formulario
  sendComment() {
    this.newCommentForm.reset({
      name: "",
      email: "",
      message: ""
    })
  }

}
