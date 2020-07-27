import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/Post';
import { Reservation } from '../../models/Reservation';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {ApiService} from '../../services/api.service';
import { NotificationsComponent } from '../../../notifications/notifications.component';
declare var $: any;

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
  
})
export class PostCardComponent implements OnInit {
  notifier = new NotificationsComponent();

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


  async  reserve(f){ 
    let user = this.apiservice.getCurrentUser();
    let userId = 1;
    if(user!=null)
      userId = user.id;
    // public id : number;
    // public guestid: number;
    // public postid: number;
    // public fromDate: any;
    // public toDate: any;
    // public status: number;
    let formData = new FormData();
    console.log(f);
    formData.append('postId',f.id);
    formData.append('guestid',userId.toString());
    formData.append('fromDate',f.picker1);
    formData.append('toDate',f.picker2);
    formData.append('status',"1");
    //for resrvation object there are 3 status
    // 0=>rejected , 1=>accepted, 2=>waiting
        let response =await fetch('http://127.0.0.1:8001/reservation/reserve',{
          method: 'POST',
          body: formData
        });
        let result =  await response.json();
        console.log(result);
        this.myshowNotification( "Felicitations you have succefully booked your couch");

    }

  onSubmit(f) {
    this.reserve(f);

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
