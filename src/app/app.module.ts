import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './componet/products-list/products-list.component';
import { ProductCardsComponent } from './componet/product-cards/product-cards.component';
import { ProductDetailComponent } from './componet/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCardsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
