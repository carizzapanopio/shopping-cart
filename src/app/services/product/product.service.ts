import { Injectable } from '@angular/core';

import { Product } from '../../models/product';
import { PRODUCTS } from '../../mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
  	return PRODUCTS;
  }

  getProduct(id: number): Product {
  	return PRODUCTS.find(product => product.id === id);
  }
}
