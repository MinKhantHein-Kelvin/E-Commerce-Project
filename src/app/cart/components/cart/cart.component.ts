import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts : any[] = [];
  total : any = 0;
  success : boolean = false;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {

    this.getCartProducts();
  }

  getCartProducts(){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart"));
      console.log(this.cartProducts);
    }
    this.getCartTotal();
  }

  detectChanges(){
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }

  getCartTotal(){
    this.total = 0;
    this.cartProducts.forEach(element => {
      this.total += element.item.price * element.quantity;
    });
  }

  addAmount(index:number){
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }

  minusAmount(index:number){
    this.cartProducts[index].quantity--;
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }

  deleteProduct(index){
    this.cartProducts.splice(index,1);
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }

  clearCart(){
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }

  addCart(){
    let products = this.cartProducts.map(item=> {
      return {productId : item.item.id, quantity: item.quantity}
    });
    let model = {
      userId : 5,
      date : new Date(),
      products : products
    }
    this.cartService.createNewCart(model).subscribe(res=>{
      this.success = true;
    })

  }

}
