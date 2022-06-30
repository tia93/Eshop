import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public products: Product [] = [];

  constructor(private pServ: ProductService) { }

  ngOnInit(): void {
    this.pServ.getProducts().subscribe({
      next: products => this.products = products,
      error: err => console.log(err)
      
      
    })
  }

}
