import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {ApiService} from '../services/api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  posts;
  // private httpClient: HttpClient;
  constructor(private apiservice: ApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {      
      this.apiservice.getMyPosts(params.id,1).subscribe((data)=>{
        console.log(data);
       this.posts = data;
        // return  data;
      });
    });
   
  }

}
