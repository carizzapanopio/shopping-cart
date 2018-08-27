import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { AppGlobals } from '../global';

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
