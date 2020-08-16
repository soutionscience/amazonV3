import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cart_service: ShoppingCartService) { }

  ngOnInit(): void {
  }
  getCartCount(){
    return this.cart_service.getCartLength()

  }

}
