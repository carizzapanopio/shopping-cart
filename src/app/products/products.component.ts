import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { AppGlobals } from '../models/global';
import { ProductService } from '../services/product/product.service';
import { GlobalService } from '../services/global/global.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ AppGlobals ]
})

export class ProductsComponent implements OnInit {
	products: Product[];
	selectedProduct: Product;
	productImage: string;

  constructor(private productService: ProductService, 
              private globalService: GlobalService, 
              private _global: AppGlobals) { }

  ngOnInit() {
  	this.getProducts();
  	this.productImage = this._global.productImage;
  }

  onSelect(product: Product): void {
  	this.selectedProduct = product;
  	console.log(this.selectedProduct);
  }

  getProducts(): void {
  	this.products = this.productService.getProducts();
  }

}
