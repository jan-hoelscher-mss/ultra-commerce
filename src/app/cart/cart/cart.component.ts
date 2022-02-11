import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../product/services/product.service";
import { CartService } from "../services/cart.service";
import { Product } from "../../product/models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['image', 'title', 'price', 'inputquantity', 'removefromcart'];
  dataSource:Product[] = [];
  isLoading = true;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.all().subscribe(products => {
      this.dataSource = products;
      console.log("Cart", this.dataSource);
      this.isLoading = false;
    })
  }

  updateProduct(entry: any, quantity: any) {
    this.cartService.updateProductQuantity(entry.product, quantity);
  }

  removeFromCart(entry:any) {
    this.cartService.removeProduct(entry.product);
  }
}
