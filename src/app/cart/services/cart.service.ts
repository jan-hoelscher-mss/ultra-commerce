import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, Subject, tap } from "rxjs";
import { Product } from "../../product/models/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productList: any = [];
  private productListSubject = new BehaviorSubject<any>([]);

  constructor() {
    this.productList = this.loadCart();
    if(this.productList == null){
      //this.productList = [];
    }
    this.productListSubject.next(this.productList);
  }

  public all(): Observable<Product[]> {
    return this.productListSubject.pipe(
      tap(data => {
        this.saveCart(data);
      })
    );
  }

  public addProduct(product: any){
    this.productList.push({product: product, quantity:1})
    this.productListSubject.next(this.productList);
  }

  public removeProduct(product: any){
    this.productList = this.productList.filter((p: any) => {
      return p.product.id != product.id;
    });
    this.productListSubject.next(this.productList);
  }

  public updateProductQuantity(product: any, quantity: number){
    if(quantity > 0){
      this.productList.find((p: any) => {
        return p.product.id == product.id;
      }).quantity = quantity;
      this.productListSubject.next(this.productList);
    }else{
      this.removeProduct(product);
    }
  }

  private saveCart(cart: any){
    if(cart != null){
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  private loadCart(): any{
    return JSON.parse(localStorage.getItem('cart') || "[]");
  }

}
