import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService }  from '../product.service';
import { Product } from '../product';
import { AppGlobals } from '../global';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ AppGlobals ]
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;
  productImage: String;

  constructor(
	  private route: ActivatedRoute,
	  private productService: ProductService,
	  private location: Location,
	  private _global: AppGlobals ) { }

  ngOnInit() {
  	this.getProduct();
  	this.productImage = this._global.productImage;
  }

  getProduct(): void{
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.product = this.productService.getProduct(id);
  }


}
