import { Injectable } from '@angular/core';
import { Product } from './product';
import { Cart } from './cart';
import { Item } from './item';
@Injectable()
export class AppGlobals {
  // readonly baseAppUrl: string = 'http://localhost:57431/';
  // readonly baseAPIUrl: string = 'https://api.github.com/';
  readonly productImage = './assets/product-default.png';
  cart : Cart = new Cart;
  item : Item = new Item;

  addToCart(id:number): void {
  	this.item.productId = id;
  	this.item.quantity = 1;
  	if(!this.cart.items) {
  		this.cart.items = [];
  	}
    this.cart.items.push(this.item);
    // console.log(this.cart);
  }
}