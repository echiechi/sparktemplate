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
  image;
  constructor(private PostService:PostService) { }


  ngOnInit(): void {
  }

  onSubmit() {
    let formData: FormData = new FormData();
    formData.append('file', this.image);
    this.PostService.sendFile(formData).subscribe(res => console.log(res));
  }

  setFile(changeEvent: any) {
    this.image = changeEvent.target.files[0];
  }



}
