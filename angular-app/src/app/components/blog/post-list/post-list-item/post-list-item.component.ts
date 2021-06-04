import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../../../models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post?: Post

  constructor() { }

  ngOnInit(): void { }

  loveIt(): void {
    if (this.post) {
      this.post.loveIts++
    }
  }

  dontLoveIt(): void {
    if (this.post) {
      this.post.loveIts--
    }
  }
}
