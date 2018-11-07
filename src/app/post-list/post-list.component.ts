import { Component, Input, OnInit } from '@angular/core';

import  { PostsService} from '../services/Posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
//@Input() posts:any;
posts:any;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.posts;
    //console.log(this.posts);
  }

}
