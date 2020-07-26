import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/Stock';
import { ProductService } from '../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  stock = new Stock();
  image;
  uploadText = 'Upload an image';

  constructor(private productService: ProductService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      if (res['params'].porduct)
        this.productService.getProdcutById(res['params'].porduct).subscribe((stock: any) => {
          this.stock.id = stock.id;
          this.stock.product = stock.product;
          this.stock.quantity = stock.quantity;
          this.stock.shop = stock.shop;
        })
    });

  }

  submitProduct() {

    let formData: FormData = new FormData();

    formData.append('file', this.image);
    formData.append('shopId', '1');
    formData.append('name', this.stock.product.name);
    formData.append('description', this.stock.product.description);
    formData.append('type', this.stock.product.type);
    formData.append('city', this.stock.product.city);
    formData.append('unitPrice', '' + this.stock.product.unitPrice);
    formData.append('quantity', this.stock.quantity);
    this.productService.sendProdcut(formData)
      .subscribe(result => {
        console.log(result);
        this.router.navigateByUrl('/artisanat/myShop/1/products');
      });
  }

  setFile(changeEvent: any) {
    this.image = changeEvent.target.files[0];
    console.log(this.image);
    this.uploadText = this.image.name;
  }


}
