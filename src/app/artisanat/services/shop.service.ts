import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  public sendFile(file) {
    return this.http.post("http://127.0.0.1:8000/shop/new/shop", file);
  }
  public getOrders() {
    return this.http.get("http://127.0.0.1:8000/productorder/");
  }

  public getShop(id) {
    return this.http.get('http://127.0.0.1:8000/shop/' + id);
  }

  public delete(id) {
    return this.http.delete('http://127.0.0.1:8000/shop/delete/' + id);
  }

  public deleteOrder(order) {
    return this.http.post('http://127.0.0.1:8000/productorder/delete/'+order.id, null);
  }
  public changeStatus(order){
    return this.http.post('http://127.0.0.1:8000/productorder/changeStatus/'+order.id, null);
  }
}
