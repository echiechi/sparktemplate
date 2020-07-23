import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/Post';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
  
})
export class PostCardComponent implements OnInit {
  posts;
  // private httpClient: HttpClient;
  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getPosts(1).subscribe((data)=>{
      console.log(data);
     this.posts = data;
      // return  data;
    });
  }
}
