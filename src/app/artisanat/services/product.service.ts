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

  getProducts() {
    return this.http.get('http://127.0.0.1:8000/stock/');
  }

  getProdcutById(id: string) {
    return this.http.get('http://127.0.0.1:8000/stock/' + id);
  }

  addLikes(product) {
    return this.http.post('http://127.0.0.1:8000/product/addLikes/' + product.id, product);
  }

  getMaxLikes() {
    return this.http.get('http://127.0.0.1:8000/stock/max/likes');
  }

  getMaxPrice() {
    return this.http.get('http://127.0.0.1:8000/stock/max/price');
  }

  getProductsByShop(id){
    return this.http.get('http://127.0.0.1:8000/stock/shop/'+id);
  }
}
