import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { NewShopComponent } from './new-shop/new-shop.component';
import { MyShopComponent } from './my-shop/my-shop.component';

const routes: Routes = [{
  path: 'products',
  component: ProductsComponent,
  pathMatch: 'full'
}, {
  path: 'newproduct',
  component: NewProductComponent,
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
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtisanatRoutingModule { }
