import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getSelectedPosts(params: string) {
    return this.http.get<Post[]>('http://localhost:3333/api/feed' + params);
  }
}
