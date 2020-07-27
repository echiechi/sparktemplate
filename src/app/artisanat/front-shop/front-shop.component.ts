import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-front-shop',
  templateUrl: './front-shop.component.html',
  styleUrls: ['./front-shop.component.css']
})
export class FrontShopComponent implements OnInit {

  myShop
  constructor(private shop:ShopService ,private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(res=>{
      this.shop.getShop(res['id']).subscribe(res=>this.myShop = res);
      ;
    })
  }

}
