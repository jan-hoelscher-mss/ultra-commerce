import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../models/product";
import { CartService } from "../../cart/services/cart.service";
import { Store } from "@ngrx/store";
import { add } from "../../cart/services/actions/cart.actions";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {};
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toastr: ToastrService,
    private store: Store<{ cart: any }>

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      this.productService.getProductById(param.id).subscribe(product => {
        this.product = product;
        this.isLoading = false;
      })
    });
  }

  addToCart(product: any) {
    this.store.dispatch(add({product: product}));
    this.toastr.info(product.title, "Product added to cart");
  }

}
