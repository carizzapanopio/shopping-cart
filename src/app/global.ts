import { Injectable } from '@angular/core';
import { Product } from './product';
import { Cart } from './cart';
import { Item } from './item';
@Injectable()
export class AppGlobals {
  // readonly baseAppUrl: string = 'http://localhost:57431/';
  // readonly baseAPIUrl: string = 'https://api.github.com/';
  readonly productImage = './assets/product-default.png';
  cart : Cart;

  addToCart(product: Product): void{
  	
    console.log(this.cart.items);
  }
}