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
import { ToastrModule } from 'ngx-toastr';

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
    ToastrModule.forRoot({
      disableTimeOut: false,
      closeButton: true,
      newestOnTop: true,
      // positionClass: 'toast-top-full-width'
    })
  ],
  providers: [{ provide: ProductService, useClass: ProductSqlService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
