import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {ApiService} from '../services/api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private apiservice: ApiService,private route: ActivatedRoute) { }
  post;
  ngOnInit(): void {
    this.route.params.subscribe(params => {      
      this.apiservice.getPostDetails(params.id).subscribe((data)=>{
        console.log(data);
       this.post = data;
        // return  data;
      });
    });
  }

}
