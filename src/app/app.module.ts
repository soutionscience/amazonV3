import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './PAGES/home/home.component';
import { BannerComponent } from './COMPONENTS/banner/banner.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { ProductsComponent } from './COMPONENTS/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

import { FOOTERComponent } from './COMPONENTS/footer/footer.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { CheckoutProductsComponent } from './COMPONENTS/checkout-products/checkout-products.component';
import { SubtotalComponent } from './COMPONENTS/subtotal/subtotal.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    HeaderComponent,
    ProductsComponent,
    FOOTERComponent,
    CheckoutComponent,
    CheckoutProductsComponent,
    SubtotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
