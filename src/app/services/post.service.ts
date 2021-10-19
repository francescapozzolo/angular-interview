import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Comment } from '../models/comment.model';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  comments: Comment[] = [];

  constructor(private http: HttpClient) {
    this.loadStorage();
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((data: Post[]) => data.slice(0, 10)));
  }

  getPost(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(map((data: Post) => data));
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
