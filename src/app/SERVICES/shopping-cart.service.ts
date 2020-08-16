import { Injectable } from '@angular/core';
import {Product} from '../SHARED/product.model'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: Product [] = [];

  constructor() { }

  addProduct = (product: Product)=>{
    let products = this.getProducts();
    if(products){
      products.push(product);
      localStorage.setItem('shopping_cart', JSON.stringify(products))

    }else{
      this.products.push(product);
       localStorage.setItem('shopping_cart', JSON.stringify(this.products))

    }

  

  }
  getProducts = ()=>{
    let stored_products = localStorage.getItem('shopping_cart')

    return JSON.parse(stored_products)
  }
  getCartLength =()=>{
    let products = this.getProducts();
    return products? this.getProducts().length: 0
    console.log('get ', products)
    //return this.getProducts().length;
  }
  removeItem(p){
    console.log('p', p)
    let shopping_cart = this.getProducts();
    const index = shopping_cart.findIndex(item=> item.id === p.id)
    if(index >=0){
      shopping_cart.splice(index,1);
     return  localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart))

    }
  }
}
