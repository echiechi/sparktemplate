import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartEntry } from '../models/Cart';
import { Order } from '../models/Order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: BehaviorSubject<CartEntry[]>

  constructor(private http: HttpClient) {
    let emptyArray = [];
    this.cart = new BehaviorSubject(emptyArray);
  }


  placeOrder(order: Order[]) {
    return this.http.post('http://127.0.0.1:8000/productorder/new', order);
  }
}
