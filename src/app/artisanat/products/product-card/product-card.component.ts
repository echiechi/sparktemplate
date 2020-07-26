import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Stock } from 'app/artisanat/models/Stock';
import { CartService } from 'app/artisanat/services/cart.service';
import { CartEntry } from '../../models/Cart';
import { ProductService } from 'app/artisanat/services/product.service';
import { NotifService } from 'app/artisanat/services/notif.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, OnChanges {

  @Input() product: Stock;

  constructor(private cartService: CartService,
    private productService: ProductService,
    private notif: NotifService) { }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log(this.product);
  }

  ngOnInit(): void {
  }

  addToProducts(product, maxQuantity) {
    let productsList = this.cartService.cart.value;
    console.log(productsList);
    let isProductInCart = productsList.find(x => x.product.id === product.id);
    if (isProductInCart) {
      isProductInCart.quantity++;
      this.notif.showNotification('bottom', 'right', 'info', `${product.name} added quantity +1`);
    } else {
      if (maxQuantity > 0) {
        let cartEntry = new CartEntry();
        cartEntry.quantity = 1;
        cartEntry.product = product;
        cartEntry.maxQuantity = maxQuantity;
        cartEntry.shop = this.product.shop.id;
        cartEntry.stockId = this.product.id;
        productsList.push(cartEntry);
        this.notif.showNotification('bottom', 'right', 'info', `${product.name} added to cart`);
      } else {
        this.notif.showNotification('bottom', 'right', 'danger', 'quantity equal to 0')
      }
      
    }
    
  }

  like(product) {
    this.product.product.likes = this.product.product.likes + 1;
    this.productService.addLikes(this.product.product).subscribe(res => {
      console.log(res);
    })
  }

}
