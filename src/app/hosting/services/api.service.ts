import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiServer = "http://127.0.0.1:8001";
image;
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

  constructor(private httpClient: HttpClient) { }

  //get posts by page default 1
  public getPosts(page){
    return this.httpClient.get(this.apiServer+"/post/"+"p="+page);
  }
  public getMyPosts(userId,page){
    return this.httpClient.get(this.apiServer+"/post/view/userposts/"+userId+"?p="+page);
  }

  //get post details
  public getPostDetails(postID){
    return this.httpClient.get(this.apiServer+"/post/view/"+postID);
  }
  //search posts'
  public searchPosts(userId,page){
    return this.httpClient.get(this.apiServer+"/post/view/userposts/"+userId+"?p="+page);
  }
  //get user(owner) posts
  public getPostsbyUserID(page){
    return this.httpClient.get(this.apiServer+"/post/");
  }
  
  public sendFile(file) {
    return this.httpClient.post(this.apiServer+"/post/new/image", file);
  }

  
  async  savePost(f){ 
    let formData = new FormData();
    console.log(f);
    formData.append('file', this.image);
    formData.append('title',f.title);
    formData.append('description',f.description);
    formData.append('city',f.city);

        let response =await fetch(this.apiServer+"/post/new/image",{
          method: 'POST',
          body: formData
        });
        let result =  await response.json();
        console.log(result);
    }

  //update  user(owner) posts
  // public updatePost(post){
  //   return this.httpClient.post(this.apiServer+"/post/update/"+postId,post);
  // }
  //delete post
  public deletePost(postId){
    return this.httpClient.get(this.apiServer+"/post/delete/"+postId);
  }
  //resrve post
  public reserve(postID,startDate,endDate){
    return this.httpClient.get(this.apiServer+"/post/reserve/"+postID+"/"+startDate+"/"+endDate);
  }
  //confirm resrevation
  public confirmReservation(reservationID){
    return this.httpClient.get(this.apiServer+"/post/confirm/"+reservationID);
  }
  // @Route("/new", name="post_new")
// @Route("/update/{id}", name="posts_update")
// @Route("/new/image", name="post_image_new")


//  @Route("/", name="post_index")
//  @Route("/view/{id}", name="post_view")
// @Route("/city/{postCityName}", name="posts_city")
// @Route("/delete/{id}", name="posts_delete")
//  @Route("/view/userposts/{userid}", name="post_view")

//missing routes
//post/reserve/:id/:start-date/:end-date
//post/confirm-reservation/:id
//post/myresrvations






}
