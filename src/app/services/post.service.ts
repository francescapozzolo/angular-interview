import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
    console.log('Service listo')
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
}
