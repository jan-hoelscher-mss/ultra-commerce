import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productCategoryList: any = [];
  private productCategoryListSubject = new BehaviorSubject<any>([]);
  constructor(
    private http: HttpClient
  ) { }

  public all(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  public getCategories(): Observable<string[]>{
    return this.http.get<string[]>('https://fakestoreapi.com/products/categories')
  }

  public getProductById(id: number): Observable<Product> {
    return this.http.get<Product>('https://fakestoreapi.com/products/'+id);
  }
}
