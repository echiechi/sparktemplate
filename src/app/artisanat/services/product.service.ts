import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }


  sendProdcut(form) {
    return this.http.post('http://127.0.0.1:8000/product/new', form);
  }
}
