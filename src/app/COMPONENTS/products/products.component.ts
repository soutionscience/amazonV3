import { Component, OnInit, Input } from '@angular/core';
import {ShoppingCartService} from '../../SERVICES/shopping-cart.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: any []

  constructor(private shoppin_cart: ShoppingCartService ) { }

  ngOnInit(): void {
    // console.log('products ', this.products)
  }
  add_to_cat(p){
    console.log(p)
    this.shoppin_cart.addProduct(p);
    this.get_shopping_cart_length()
  }
  get_shopping_cart_length(){
    let length = this.shoppin_cart.getCartLength()
    console.log(length)
  }

}
