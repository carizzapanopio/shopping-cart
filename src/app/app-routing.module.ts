import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import { CartItemComponent }  from './cart-item/cart-item.component';
import { CartComponent }  from './cart/cart.component';
import { UserComponent }  from './user/user.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/items/:id', component: CartItemComponent },
  { path: 'checkout', component: CartComponent },
  { path: 'login/:returnUrl', component: UserComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ 
  	RouterModule
  ]
})
export class AppRoutingModule { }
