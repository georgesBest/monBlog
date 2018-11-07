import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {enableProdMode} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ListPostsItemComponent } from './list-posts-item/list-posts-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import  { PostsService} from './services/Posts.service';
import  { AuthService} from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { userService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    ListPostsItemComponent,
    PostListComponent,
    PostListItemComponent,
    AuthComponent,
    ViewPostComponent,
    LoginComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PostsService,AuthService,userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//enableProdMode();