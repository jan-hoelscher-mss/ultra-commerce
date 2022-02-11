import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from "./product-routing.module";
import { MaterialModule } from "../material/material.module";
import { CartModule } from "../cart/cart.module";



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProductRoutingModule,
    CartModule
  ],
  providers: [
  ]
})
export class ProductModule { }
