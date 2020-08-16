import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/SHARED/product.model';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {
  @Input() checkout_products: Product []

  constructor() { }

  ngOnInit(): void {
    console.log('products ', this.checkout_products)
  }

}
