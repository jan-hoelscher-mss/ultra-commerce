import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from "./auth/auth.module";
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModule } from "./product/product.module";
import { CartModule } from "./cart/cart.module";
import { ProductService } from "./product/services/product.service";
import { ProductSqlService } from "./product/services/product-sql.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AuthModule,
    ProductModule,
    CartModule,
    AppRoutingModule,
  ],
  providers: [{ provide: ProductService, useClass: ProductSqlService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
