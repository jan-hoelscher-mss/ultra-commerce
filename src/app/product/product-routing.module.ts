import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { AuthGuard } from "../auth/guards/auth.guard";

const routes: Routes = [
  {
    path: 'product/list', component: ProductListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'product/:id', component: ProductDetailComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
