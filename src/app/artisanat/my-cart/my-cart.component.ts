import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartEntry } from '../models/Cart';
import { Order } from '../models/Order';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

  cart: CartEntry[];
  total: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(cartEnties => {
      this.cart = cartEnties;
      this.total = cartEnties.reduce((prev, curr) => (prev + curr.quantity * curr.product.unitPrice), 0);
    })
  }

  updateQuantity(cart, event) {
    cart.quantity = event.value;
    this.total = this.cart.reduce((prev, curr) => (prev + curr.quantity * curr.product.unitPrice), 0);
  }

  deleteProduct(id) {
    this.cart = this.cart.filter(c => c.product.id !== id);
    this.cartService.cart.next(this.cart);
  }

  placeOrder() {
    let orders = [];
    this.cart.forEach(c => {
      let order = new Order();
      order.product = c.product.id;
      order.shop = c.shop;
      order.user = 1;
      order.quantity = c.quantity;
      order.stock = c.stockId;
      orders.push(order);
    })
    this.cartService.placeOrder(orders).subscribe(res => console.log(res))
    console.log(this.cart);
  }


}
