import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { CartService } from "../../cart/services/cart.service";
import { Product } from "../models/product";
import { Store } from '@ngrx/store';
import { add, remove } from "../../cart/services/actions/cart.actions";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['image', 'title', 'price', 'addtocart'];
  dataSource:Product[] = [];
  isLoading = true;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private store: Store<{ cart: any }>
  ) { }

  ngOnInit(): void {
    this.productService.all().subscribe(products => {
      this.dataSource = products;
      this.isLoading = false;
    })
  }

  addToCart(event: any, product: any) {
    event.stopPropagation();
    this.store.dispatch(add({product: product}));
    //this.cartService.addProduct(product);
  }
}
