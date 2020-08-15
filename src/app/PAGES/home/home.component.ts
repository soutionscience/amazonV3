import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../../../assets/DATA/product.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any []

  constructor() { }

  ngOnInit(): void {
    this.products = (data as any).default;
  }

}
