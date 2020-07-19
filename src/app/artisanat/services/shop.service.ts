import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  public sendFile(file) {
    return this.http.post("http://127.0.0.1:8000/shop/new/image",file);
  }
}
