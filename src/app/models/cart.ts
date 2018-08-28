import { Item } from './item';

export class Cart {
  items: Array<Item>; 
  total: number;

  constructor(items: Array<Item>,total:number){
    
    this.items = items;
    this.total = total;
  };
}