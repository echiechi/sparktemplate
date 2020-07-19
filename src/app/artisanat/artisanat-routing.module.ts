import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewShopComponent } from './new-shop/new-shop.component';
import { MyShopComponent } from './my-shop/my-shop.component';
import { MyProductsComponent } from './my-shop/my-products/my-products.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { FrontShopComponent } from './front-shop/front-shop.component';

const routes: Routes = [{
  path: 'products',
  component: ProductsComponent,
  pathMatch: 'full'
}, {
  path: 'newShop',
  component: NewShopComponent,
  pathMatch: 'full'
},
{
  path: 'myShop/:id',
  component: MyShopComponent,
  pathMatch: 'full'
},
{
  path: 'myShop/:id/products',
  component: MyProductsComponent,
  pathMatch: 'full'
}, {
  path: 'myShop/:id/newproduct',
  component: NewProductComponent,
  pathMatch: 'full'
},
{
  path: 'myShop/:id/editproduct/:porduct',
  component: NewProductComponent,
  pathMatch: 'full'
},
{
  path: 'cart',
  component: MyCartComponent,
  pathMatch: 'full'
},
{
  path: 'frontshop/:id',
  component: FrontShopComponent,
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtisanatRoutingModule { }
