import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Stock } from '../models/Stock';
import { ActivatedRoute } from '@angular/router';
declare const google: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  productsFilter;
  maxLikes = 0;
  maxPrice = 0;
  likesFilter = 0;
  priceFilter = 0;
  productFilter = '';
  shopId;
  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((res: any) => {

      this.router.params.subscribe(res1 => {
        this.shopId = (res1['id']) ? res1['id'] :null;
        let res2 = res;
        if(this.shopId)
          res2 = res.filter(x => x.shop.id == this.shopId);
        this.productsFilter = res2;
        this.products = res2;
      });
    })
    this.productService.getMaxLikes().subscribe((maxLikes: any) => this.maxLikes = maxLikes.max_likes);
    this.productService.getMaxPrice().subscribe((maxPrice: any) => this.maxPrice = maxPrice.max_price);
  }

  updateLikes($event) {
    this.likesFilter = $event.value;
    if ($event.value > 0) {
      this.productsFilter = this.products.filter(x => x.product.likes >= $event.value);
    } else {
      this.productsFilter = this.products;
    }
  }

  updatePrice($event) {
    this.priceFilter = $event.value;
    if ($event.value) {
      this.productsFilter = this.products.filter(x => x.product.unitPrice >= $event.value);
    } else {
      this.productsFilter = this.products;
    }
  }

  search($event, inp: HTMLInputElement) {
    if (inp.value && inp.value != '') {
      this.productsFilter = this.products.filter(x => x.product.name.toLowerCase().indexOf(inp.value.toLowerCase()) >= 0);
      console.log(this.productsFilter);
    } else {
      this.productsFilter = this.products;
    }
  }
}
