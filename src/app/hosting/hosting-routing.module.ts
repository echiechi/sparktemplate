import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecherchepostComponent } from './recherchepost/recherchepost.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ProfileComponent } from './profile/profile.component';
import { PostCardComponent } from './posts/post-card/post-card.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [

  {
    path: 'recherche',
    component:RecherchepostComponent,
    pathMatch:'full'
  },

  {
    path: 'posts',
    component:PostsComponent,
    pathMatch:'full'
  },

  {
    path: 'addPost',
    component:AddPostComponent,
    pathMatch:'full'
  },
  {
    path: 'profile',
    component:ProfileComponent,
    pathMatch:'full'
  },
  {
    path: 'editPost/:id',
    component:EditPostComponent,
    pathMatch:'full'
  },
  {
    path: 'deletePost/:id/:pid',
    component:MyPostsComponent,
    pathMatch:'full'
  },
  {
    path: 'myposts/:id',
    component:MyPostsComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostingRoutingModule { }
