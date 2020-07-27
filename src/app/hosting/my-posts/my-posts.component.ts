import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import { User } from '../../user-profile/login/model/user';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {ApiService} from '../services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  posts;
  // private httpClient: HttpClient;
  constructor(private apiservice: ApiService,private route: ActivatedRoute,private router: Router ) { }
 
  deletePost(postId): void {
    this.apiservice.deletePost(postId)
      .subscribe( data => {
        this.posts = this.posts.filter(p => p.id !== postId);
      })
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser') != null) {
      //connected 
        const currentUser = JSON.parse(    localStorage.getItem('currentUser'));

        //, JSON.stringify(this.userLoged)
        console.log(currentUser);
        console.log(currentUser.id);
                    //params.id
        this.route.params.subscribe(params => {      
          this.apiservice.getMyPosts(currentUser.id,1).subscribe((data)=>{
            console.log(data);
          this.posts = data;
            // return  data;
          });
        });
    }else{
      //redirect to loginpage
      this.router.navigate(['/login']);
    }
  }

}
