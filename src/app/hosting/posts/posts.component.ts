import { Component, OnInit } from '@angular/core';
import { TestObject } from 'protractor/built/driverProviders';
import { HttpClient } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  // private httpClient: HttpClient;
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    // this.apiservice.getPosts(1).subscribe((data)=>{
    //   console.log(data);
    //  this.posts = data;
    //   // return  data;
    // });

    // this.httpClient.get("http://127.0.0.1:8000/post/").subscribe((data)=>{
    //   console.log(data);
    //   this.posts = data;
    // });
  }
}
