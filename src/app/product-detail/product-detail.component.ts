import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { AppGlobals } from '../models/global';
import { ProductService }  from '../services/product/product.service';
import { GlobalService } from '../services/global/global.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ AppGlobals ]
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;
  productImage: String;
  item: Item;
  cart:Cart;

  constructor(
	  private route: ActivatedRoute,
    private location: Location,
	  private productService: ProductService,
    private globalService: GlobalService, 
	  private _global: AppGlobals ) { }

  ngOnInit() {
  	this.getProduct();
  	this.productImage = this._global.productImage;
    console.log(this.productImage);
    this.cart = this.globalService.cart;

  }

  getProduct(): void {
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.product = this.productService.getProduct(id);
    this.checkIfExistingItem();
  }

  checkIfExistingItem(): void {
    this.item = this.globalService.searchItem(this.product.id);

    if(! this.item){
      // not existing){
      // this.item = 
      this.item = new Item(this.product.id,1);
    }
    
  }




}
