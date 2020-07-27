import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public sendFile(file) {
    return this.http.post("http://127.0.0.1:8001/post/new/image", file);
  }
}
