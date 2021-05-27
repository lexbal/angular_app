import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Post[] = [
    {"title": "Post n°1", "content": "This is the first content", "loveIts": 0},
    {"title": "Post n°2", "content": "This is the second content", "loveIts": 0},
    {"title": "Post n°3", "content": "This is the third content", "loveIts": 0}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
