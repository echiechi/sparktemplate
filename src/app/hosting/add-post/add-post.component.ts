import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../services/Post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post = new Post();
  userId: number;
  image;title;city;description;
  constructor(private PostService:PostService) { }


  ngOnInit(): void {
  }

  async  savePost(f){ 
    let formData = new FormData();
    console.log(f);
    formData.append('file', this.image);
    formData.append('title',f.title);
    formData.append('description',f.description);
    formData.append('city',f.city);

        let response =await fetch('http://127.0.0.1:8000/post/new/image',{
          method: 'POST',
          body: formData
        });
        let result =  await response.json();
        console.log(result);
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



}
