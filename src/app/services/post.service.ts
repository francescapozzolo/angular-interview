import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  comments: Comment[] = [];

  constructor(private http: HttpClient) {
    this.loadStorage();
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((data: any) => data.slice(0, 10)));
  }

  getPost(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(map((data: any) => data));
  }

  getComments(postId: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  }

  addComment(comment: Comment) {
    this.comments.push(comment)
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  loadStorage() {
    if (localStorage.getItem('comments')) {
      this.comments = JSON.parse(localStorage.getItem('comments')!)
    }
    return this.comments
  }

}
