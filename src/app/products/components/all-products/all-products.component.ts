import { Product } from './../../models/Products';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {


  constructor(private productService : ProductService) { }

  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'indeterminate';
  products: Product[] = [];
  allCategories:any[] = [];
  cartProducts: any[] = [];
  loading : boolean = false;

  ngOnInit(): void {

    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts(){
    this.loading = true;
    this.productService.getAllProduct().subscribe((data:any)=>{
      this.products = data;
      this.loading = false;
    });
  }

  getAllCategories(){
    this.loading = true;
    this.productService.getAllCategories().subscribe((res:any)=>{
      this.allCategories = res;
      this.loading = false;
    })
  }

  filterCategory(event:any){
    let value = event.target.value;
    // value == 'all'? this.getAllProducts() : this.getProductCategory(value);
    if(value == 'all'){
      this.getAllProducts();
    }else{
      this.getProductCategory(value);
    }
  }

  getProductCategory(keyword){
    this.loading = true;
    this.productService.getProductByCategory(keyword).subscribe((data:any)=>{
      this.products = data;
      this.loading = false;
    })
  }

  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart"));
      let exist = this.cartProducts.find(x=>x.item.id == event.item.id);
      if(exist){
        alert("Product is already exist")
      }
      else{
        this.cartProducts.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProducts));
      }
    }else{
      this.cartProducts.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProducts));
    }
  }

}
