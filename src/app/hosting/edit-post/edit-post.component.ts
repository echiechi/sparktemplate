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

  post = new Post();
  userId: number;
  image; title; city; description;
  editForm: FormGroup;
  constructor(private PostService: PostService, private formBuilder: FormBuilder, private apiservice: ApiService, private route: ActivatedRoute) { }



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
      console.log(params);
      this.apiservice.getPostDetails(params.id).subscribe((data : any) => {
        this.post = data; 
           console.log(data);
          // this.post = data;
        //  this.editForm.title(data[0]);

        // return  data;
      });
    });
  }


  async  editPost(f){ 
      let user = this.apiservice.getCurrentUser();
      let userId = 1;
      if(user!=null)
        userId = user.id;

      let formData = new FormData();
      console.log(f);
      formData.append('file', this.image);
      formData.append('title',f.title);
      formData.append('description',f.description);
      formData.append('city',f.city);
      formData.append('id',f.id);
      
      let response =await fetch('http://127.0.0.1:8001/post/update/'+f.id,{
        method: 'POST',
        body: formData
      });
      let result =  await response.json();
      console.log(result);
      this.myshowNotification( "Mr."+user.nom+" have succefully updated your Post.");
    }

  onSubmit(f) {
    this.editPost(f);

    return;
  }

 myshowNotification(msg){
      const from='top';
      const align='center';

      const type = ['','info','success','warning','danger'];

      const color =2;// Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: "notifications",
          message:msg
      },{
          type: type[color],
          timer: 500,
          placement: {
              from: from,
              align: align
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }




}
