import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../models/product";

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
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      this.productService.getProductById(param.id).subscribe(product => {
        this.product = product;
        this.isLoading = false;
      })
    });
  }
}
