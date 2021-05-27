import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    {"title": "Post n°1", "content": "This is the first content", "loveIts": 0, "created_at": this.randomDate(new Date(2012, 0, 1), new Date())},
    {"title": "Post n°2", "content": "This is the second content", "loveIts": 0, "created_at": this.randomDate(new Date(2012, 0, 1), new Date())},
    {"title": "Post n°3", "content": "This is the third content", "loveIts": 0, "created_at": this.randomDate(new Date(2012, 0, 1), new Date())}
  ];

  constructor() { }

  randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
