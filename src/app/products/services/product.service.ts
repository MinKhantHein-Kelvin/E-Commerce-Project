import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProduct(){
    return this.http.get( environment.baseApi + "products");
  }

  getAllCategories(){
    return this.http.get( environment.baseApi + "products/categories");
  }

  getProductByCategory(keyword : string){
    return this.http.get( environment.baseApi + "products/category/"+keyword);
  }
}
