import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './componet/products-list/products-list.component';
import { ProductCardsComponent } from './componet/product-cards/product-cards.component';
import { ProductDetailComponent } from './componet/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componet/login/login.component';
import { RegisterComponent } from './componet/register/register.component';
import { UserDetailComponent } from './componet/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCardsComponent,
    ProductDetailComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
