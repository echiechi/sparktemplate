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
import { NewShopComponent } from './new-shop/new-shop.component';
import { MyShopComponent } from './my-shop/my-shop.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [ProductsComponent, NewProductComponent, NewShopComponent, MyShopComponent],
  imports: [
    CommonModule,
    ArtisanatRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule
  ]
})
export class ArtisanatModule { }
