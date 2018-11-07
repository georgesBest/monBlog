import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/Posts.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  title:string;
  content:string;
  index:number;
  isAuth:boolean;
  constructor(private postsService: PostsService, private authService: AuthService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.index = this.route.snapshot.params['index'];
    this.title = this.postsService.getPostByIndex(this.index).title;
    this.content = this.postsService.getPostByIndex(this.index).content;
    this.isAuth = this.authService.isAuth;
  }

}
