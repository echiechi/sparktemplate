import { Component, OnInit } from '@angular/core';
import {Gallery} from '../model/Gallery';
import {Observable} from 'rxjs';
import {GalleryService} from '../service/gallery.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Fish} from '../model/Fish';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
gallery: Gallery = new Gallery();
  form: FormGroup;
  galleries: Gallery[];
  constructor(private galleryService: GalleryService, public fb: FormBuilder) {
    this.form = this.fb.group({
      imageTitle: [''],
      userId: [''],
      imagePath: [null],
    })
  }

  ngOnInit(): void {
    this.galleryService.getRandGallery().subscribe(
        (data: Gallery[]) => this.galleries = data
    );

  }
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      imagePath: file
    });
    this.form.get('imagePath').updateValueAndValidity()
  }

  submitForm() {
    console.log(this.form.value)
    const formData: any = new FormData();
    formData.append('imageTitle', this.form.get('imageTitle').value);
    formData.append('userId', this.form.get('userId').value);
    formData.append('imagePath', this.form.get('imagePath').value);
    this.galleryService.submitForm(formData);
  }

/*onSubmit() {
  this.galleryService.addGallery(this.gallery)
      .subscribe();
}*/
}
