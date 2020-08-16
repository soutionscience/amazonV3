import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/SHARED/product.model';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: Product [];
  @Output() deleteEvent : EventEmitter<any> = new EventEmitter()

  constructor(private shopping_cart_service: ShoppingCartService) { }

  ngOnInit(): void {
    console.log('products ', this.checkout_products)
  }
  removeItem(p){
    this.shopping_cart_service.removeItem(p)
    this.deleteEvent.emit(p)

  }

}
