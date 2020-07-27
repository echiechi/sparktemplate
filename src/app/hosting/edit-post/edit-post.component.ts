import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ApiService } from '../services/api.service';
import { PostService } from '../services/post.service';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { NotificationsComponent } from '../../notifications/notifications.component';
declare var $: any;
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  notifier = new NotificationsComponent();

  post: Object = new Post();
  userId: number;
  image;title;city;description;
  editForm: FormGroup;
  constructor(private PostService:PostService,private formBuilder: FormBuilder,private apiservice: ApiService,private route: ActivatedRoute) { }
  


  ngOnInit(): void {
    // //edit form
    // this.editForm = this.formBuilder.group({
    //   id: [''],
    //   title: ['', Validators.required],
    //   description: ['', Validators.required],
    //   city: ['', Validators.required],
    //   image: ['', Validators.required]
    // });


    this.route.params.subscribe(params => {      
      this.apiservice.getPostDetails(params.id).subscribe((data)=>{
        console.log(data);
       this.post = data;
      //  this.editForm.title(data[0]);
       
        // return  data;
      });
    });
  }

  onSubmit(){
    return;
  }

}
