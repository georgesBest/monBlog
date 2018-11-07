import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post:any;
  @Input() index:number;
  constructor() { }

  ngOnInit() {
  }

  addLove() {
    this.post.loveIts = this.post.loveIts+1;
  }
  addDontLove() {
    this.post.dontLoveIts = this.post.dontLoveIts+1;
  }

  compareLoveDontLove(){
    if (this.post.loveIts >= this.post.dontLoveIts) {
      return true;
    }
    else
    {
      return false;
    }
  }

}
