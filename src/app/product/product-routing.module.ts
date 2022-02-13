import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { AuthGuard } from "../auth/guards/auth.guard";

const routes: Routes = [
  {
    path: 'products', component: ProductListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'products/:id', component: ProductDetailComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
