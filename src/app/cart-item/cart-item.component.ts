import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { Cart } from '../cart';
import { Item } from '../item';


import { ProductService }  from '../product.service';

import { AppGlobals } from '../global';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  providers: [ AppGlobals ]
})
export class CartItemComponent implements OnInit {
	product: Product;
  item: Item;
  cart: Cart;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private _global: AppGlobals) { }

  ngOnInit() {
    console.log(this._global.cart);
  }

  addItem(): void{

  	const id = +this.route.snapshot.paramMap.get('id');
  	this.product = this.productService.getProduct(id);
    console.log(this.product);


  }


}
