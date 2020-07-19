import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtisanatRoutingModule } from './artisanat-routing.module';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';

import { NewShopComponent } from './new-shop/new-shop.component';
import { MyShopComponent } from './my-shop/my-shop.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { WorkersComponent } from './my-shop/workers/workers.component';
import { SmallCardComponent } from './my-shop/small-card/small-card.component';
import { MyProductsComponent } from './my-shop/my-products/my-products.component';
import { MyGridComponent } from './my-shop/my-grid/my-grid.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { FrontShopComponent } from './front-shop/front-shop.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProductsComponent, NewProductComponent, NewShopComponent, MyShopComponent, WorkersComponent, SmallCardComponent, MyProductsComponent, MyGridComponent, ProductCardComponent, MyCartComponent, FrontShopComponent],
  imports: [
    CommonModule,
    ArtisanatRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatListModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ArtisanatModule { }
