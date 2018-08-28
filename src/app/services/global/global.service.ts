import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Cart } from '../../models/cart';
import { Item } from '../../models/item';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  cart : Cart = JSON.parse(localStorage.getItem("cart"));
  

  constructor() { }

  addToCart(id:number, quantity:number): void {
    console.log("id" + id);
    console.log("quantity" + quantity);
    // var existing = 0;
    if(! this.cart) {
      console.log("empty");
      this.cart = new Cart([],0);
      var item = new Item(id,quantity);
      this.cart.items.push(item);
    }else{
      var indexOfExisting = null;
      indexOfExisting = this.getItemIndex(id);
      console.log("indexofexisting" + indexOfExisting);
      if(indexOfExisting < 0){
        console.log("not existing");
        var item = new Item(id,quantity);
        this.cart.items.push(item);
      }else{
        console.log("existing");
        this.cart.items[indexOfExisting].quantity = quantity;
      }
    }
    
    localStorage.setItem("cart",JSON.stringify(this.cart));
    console.log(localStorage.getItem("cart"));
  }


  searchItem(id:number): Item{
    console.log("id"+id);
    var item = null;
    if(this.cart){
      this.cart.items.forEach(function(it,index){
        if(it.productId === id){
          item = it;
        }
      }); 
    }
    return item;
    
  }

  getItemIndex(id:number): number {
    this.cart = JSON.parse(localStorage.getItem("cart"));
    var found = -1;
    // console.log(this.cart);
    if(this.cart){
      this.cart.items.forEach(function(it,index){
        if(it.productId === id){
          console.log("search existing" + index);
          found = index;
        }
      }); 
    }else{
      found = -1; 
    }
    return found;
  }

}
