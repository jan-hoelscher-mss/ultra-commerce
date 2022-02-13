import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { Product } from "../models/product";
import { Store } from '@ngrx/store';
import { add } from "../../cart/services/actions/cart.actions";
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, filter, map, tap } from "rxjs";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['image', 'title', 'price', 'addtocart'];
  dataSource:Product[] = [];
  categories: any = [];
  isLoading = true;

  private readonly _filterValue: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    public productService: ProductService,
    private toastr: ToastrService,
    private store: Store<{ cart: any }>
  ) { }

  ngOnInit(): void {
    this.loadProducts(null);
  }

  loadProducts(category: string | undefined | null){
    this.productService.all().pipe(
      map(products => {
        return products.filter(product => {
          return category == null || category == 'all' || product.category == category;
        });
      })
    ).subscribe(products => {
      this.dataSource = products;
      this.isLoading = false;
    })
  }

  addToCart(event: any, product: any) {
    event.stopPropagation();
    this.store.dispatch(add({product: product}));
    this.toastr.info(product.title, "Product added to cart");
  }

  onCategorySeletion(event: any) {
    console.log("selection changed", event.value);
    this.loadProducts(event.value);
  }
}
