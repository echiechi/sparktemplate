import { Component, OnInit } from '@angular/core';
import { ShopService } from 'app/artisanat/services/shop.service';
import { Order } from 'app/artisanat/models/Order';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {


  orders: Order[];
  constructor(private shopService: ShopService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.shopService.getOrders(params.id).subscribe((res: Order[]) => {
        this.orders = res
      });
    });
  }

  delete(order) {
    this.shopService.deleteOrder(order).subscribe((res: Order[]) => this.orders = res);
  }

  changeStatus(order) {
    this.shopService.changeStatus(order).subscribe((res: Order[]) => this.orders = res);
  }

}
