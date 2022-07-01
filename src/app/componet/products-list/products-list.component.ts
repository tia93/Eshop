import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public products: Product[] = [];
  public searchString = ''
  public selectedCategory = ''

  constructor(private pServ: ProductService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  search() {
    this.selectedCategory = ''
    // const input = document.getElementById('search_input') as HTMLInputElement;
    // this.searchString = input!.value.trim().toLowerCase();
    this.pServ.getProducts(this.searchString).subscribe({
      next: products => this.products = products,
      error: err => console.log(err)
    })
  }

  getAllProducts() {
    this.pServ.getProducts().subscribe({
      next: products => this.products = products,
      error: err => console.log(err)
    })
  }

  orderByPrice() {
    // this.products = this.products.sort((a, b) => a.price - b.price); esercizio
    this.products.sort((p1, p2) => p1.price-p2.price)
  }

  orderByname() {
    // this.products = this.products.sort((a, b) => a.name.localeCompare(b.name) ) esercizio
    this.products.sort((p1, p2) => p1.name.localeCompare(p2.name))
  }

  filterByCategory(){
    // const selector = document.getElementById('category-selector') as HTMLSelectElement;
    // const value = selector.value
    // if(value === 'all') this.getAllProducts()
    // else {
    //   this.pServ.getProducts(undefined, value).subscribe({
    //     next: products => this.products = products,
    //     error: err => console.log(err)
    //   })
    // }

   
    
  


    this.searchString = ''
    this.pServ.getProducts(undefined, this.selectedCategory).subscribe({
      next: products => this.products = products,
      error: err => console.log(err)
    })
  }
  }

  
  