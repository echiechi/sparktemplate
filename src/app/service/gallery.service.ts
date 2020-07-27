import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Gallery} from '../model/Gallery';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  addGallery (gallery: Gallery): Observable<Gallery> {
    return this.http.post<Gallery>('http://127.0.0.1:8000/addgal', gallery);
  }

  submitForm(formData: FormData) {
    this.http.post('http://127.0.0.1:8000/addgal', formData).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    )
  }

  getRandGallery() {
    return this.http.get<Gallery[]>('http://127.0.0.1:8000/getgal')
  }
}
