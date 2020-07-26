import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {

  products;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(result=>this.products = result);
  }

}
