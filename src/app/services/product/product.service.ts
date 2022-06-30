import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly BASE_URL = 'https://62860d1f96bccbf32d6e2bf5.mockapi.io/products'

  constructor(private http: HttpClient) { }

  getProducts(searchString?: string):Observable<Product[]> {
    let url = this.BASE_URL;
    if(searchString){
      url = this.BASE_URL + '?name=' + searchString;
    }
    return this.http.get<Product[]>(url);

  }
  getProductsById(id: string):Observable<Product> {
    const url = this.BASE_URL + '/' + id
    return this.http.get<Product>(url)

  }
}
