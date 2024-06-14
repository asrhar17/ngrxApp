import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

productList:Product[] = [];
products$ !: Observable<Product[]>;
constructor(private http:HttpClient, public productService: ProductService){

}

ngOnInit(){
 this.getAllProducts();
}

getAllProducts(){
  // this.productService.getAllProducts().subscribe(product => {
  //   console.log('products',product);
  // });
 this.products$ = this.productService.getAllProducts();
}

}
