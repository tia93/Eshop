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
    this.getAllProducts();
  }

  search(){
    const input = document.getElementById('search_input') as HTMLInputElement;
    const searchString = input!.value.trim().toLowerCase();
    this.pServ.getProducts(searchString).subscribe({
      next: products => this.products = products,
      error: err => console.log(err)
      
      
    })
  }


getAllProducts(){
  this.pServ.getProducts().subscribe({
    next: products => this.products = products,
    error: err => console.log(err)
    
    
  })
}

sortByPrice(){
  this.products = this.products.sort((a,b)=> a.price - b.price);
  }
}
