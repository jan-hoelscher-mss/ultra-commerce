import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../product/services/product.service";
import { CartService } from "../services/cart.service";
import { select, Store } from '@ngrx/store';
import { remove, update } from "../services/actions/cart.actions";
import { Observable, of } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  displayedColumns: string[] = ['image', 'title', 'price', 'inputquantity', 'removefromcart'];
  dataSource:Observable<any> = of([]);

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private store: Store<{ cart: any }>
  ) {
    this.dataSource = this.store.pipe(select('cart'));
  }

  updateProduct(entry: any, quantity: any) {
    if(quantity.length > 0){
      this.store.dispatch(update({product: entry.product, quantity: parseInt(quantity)}));
      this.toastr.info(entry.product.title, "Product updated");
    }
  }

  removeFromCart(entry:any) {
    this.store.dispatch(remove({product: entry.product}));
    this.toastr.info(entry.product.title, "Product removed");
  }
}
