import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/post.service';
import { ApiService } from '../services/api.service';
import { NotificationsComponent } from '../../notifications/notifications.component';
declare var $: any;

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit {
  notifier = new NotificationsComponent();

  post = new Post();
  userId: number;
  image;title;city;description;
  constructor(private PostService:PostService,private apiservice: ApiService) { }


  ngOnInit(): void {
  }

  async  savePost(f){ 
    let user = this.apiservice.getCurrentUser();
    let userId = "1";
    if(user!=null)
      userId = user.id;
    console.log(userId);
    let formData = new FormData();
    console.log(f);
    formData.append('file', this.image);
    formData.append('title',f.title);
    formData.append('description',f.description);
    formData.append('city',f.city);
    formData.append('userId',userId);

        let response =await fetch('http://127.0.0.1:8000/post/new/image',{
          method: 'POST',
          body: formData
        });
        let result =  await response.json();
        console.log(result);
        this.myshowNotification( "Welcom to Coushshsurfing Mrs."+user.nom+" you succefully added your Post.");

    }

   onSubmit(f) {
     this.savePost(f);
//     let formData: FormData = new FormData(this);
//     formData.append('file', this.image);
//     formData.append('title', this.title);
//     console.log(this);
// console.log(this.title);
//     let response = fetch('/post/image/new',{
//       method:"POST",
//       body:formData
//     });
//     let result =  response.json();
//     console.log(result);
   // this.PostService.sendFile(formData).subscribe(res => console.log(res));
  }

  setFile(changeEvent: any) {
    this.image = changeEvent.target.files[0];
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
