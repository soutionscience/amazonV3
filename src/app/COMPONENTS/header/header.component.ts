import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICES/shopping-cart.service';
import { AuthService } from 'src/app/SERVICES/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cart_service: ShoppingCartService,
    public auth: AuthService) { }

  ngOnInit(): void {
  }
  getCartCount(){
    return this.cart_service.getCartLength()

  }

}
