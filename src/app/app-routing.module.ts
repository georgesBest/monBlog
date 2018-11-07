import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import {AuthComponent} from './auth/auth.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [{path:'posts',component:PostListComponent},
          {path:'posts/:index',component:ViewPostComponent},
          {path:'login',component:LoginComponent},
          {path:'inscription',component:InscriptionComponent},
          {path:'auth',component:AuthComponent},
          {path:'',redirectTo: 'posts', pathMatch: 'full'},
         //{path:'**',component:ErrorNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
