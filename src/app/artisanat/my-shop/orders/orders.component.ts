import { Component, OnInit } from '@angular/core';
import { ShopService } from 'app/artisanat/services/shop.service';
import { Order } from 'app/artisanat/models/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  orders: Order[];
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getOrders().subscribe((res: Order[]) => {
      this.orders = res
    });
  }

  delete(order) {
    this.shopService.deleteOrder(order).subscribe((res: Order[]) => this.orders = res);
  }

  changeStatus(order) {
    this.shopService.changeStatus(order).subscribe((res: Order[]) => this.orders = res);
  }

}
