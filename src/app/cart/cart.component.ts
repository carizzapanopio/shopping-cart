import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { Item } from '../models/item';
import { AppGlobals } from '../models/global';
import { ProductService }  from '../services/product/product.service';
import { GlobalService } from '../services/global/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ AppGlobals ]
})
export class CartComponent implements OnInit {
  products: Product[];
  item: Item;
  cart: Cart;
  productImage: String;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private productService: ProductService,
    private globalService: GlobalService, 
    private _global: AppGlobals) { }

  ngOnInit() {
    if("checkout" === this.route.url._value[0].path){
      if(! localStorage.getItem("user")){
        this.router.navigate(['/login']);
      }else{

        this.cart = this.globalService.cart;
        this.products = this.productService.getProducts();
        this.productImage = this._global.productImage;  
      }
    }else{
      this.cart = this.globalService.cart;
      this.products = this.productService.getProducts();
      this.productImage = this._global.productImage;  
    }
    
  }


}
