import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { Product } from 'src/app/SHARED/product.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 products: Product

  constructor(private shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
    this.getProducts()

  }
  getProducts(){
    this.products = this.shopping_cart.getProducts()
  }
  if_empty(){
    return this.shopping_cart.getCartLength() == 0?true:false
  }
  deleteEventHandler(){
    this.getProducts()
  }

}
