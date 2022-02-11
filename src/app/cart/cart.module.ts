import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from "./cart-routing.module";
import { CartService } from "./services/cart.service";
import { MaterialModule } from "../material/material.module";
import { StoreModule } from '@ngrx/store';
import { cartReducer } from "./services/reducers/cart.reducer";



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule,
    StoreModule.forRoot({ cart: cartReducer })
  ],
  providers: [CartService]
})
export class CartModule { }
