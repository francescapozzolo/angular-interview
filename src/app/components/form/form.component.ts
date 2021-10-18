import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newCommentForm!: FormGroup;
  date!: Date;

  @Output() setDate: EventEmitter<Date>;

  constructor(private formBuilder: FormBuilder) {
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
    return this.newCommentForm.get('message')?.invalid && this.newCommentForm.get('message')?.touched
  }

  //Creación del formulario
  createForm() {
    this.newCommentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      message: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  //Guardar datos del formulario
  saveComment() {
    if (this.newCommentForm.invalid) {
      return Object.values(this.newCommentForm.controls).forEach(control => {
        control.markAsTouched();
      })
    }
    //Reseteo formulario
    this.newCommentForm.reset();
    this.date = new Date();
    this.setDate.emit(this.date)
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
