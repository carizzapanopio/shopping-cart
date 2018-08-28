import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { Item } from '../models/item';
import { AppGlobals } from '../models/global';
import { ProductService }  from '../services/product/product.service';
import { GlobalService } from '../services/global/global.service';

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
  productImage: String;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private globalService: GlobalService, 
    private _global: AppGlobals) { }

  ngOnInit() {
    // console.log(this.globalService.cart);
    this.productImage = this._global.productImage;
    const id = +this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProduct(id);
    console.log(this.product);
    this.getItem();
    // console.log("hey");

  }

  getItem() {

    console.log("get item"+ JSON.stringify(this.product));
    this.item = this.globalService.searchItem(this.product.id);
    console.log("searched item" + JSON.stringify(this.item));
    // console.log(this.item);
  }

  	
    // console.log(this.product);


  }


}
