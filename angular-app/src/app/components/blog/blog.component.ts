import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  postService!: PostService;

  constructor(private $postService: PostService) { 
    this.postService = $postService;
  }

  ngOnInit(): void {
    this.posts = this.postService.posts;
  }

}
