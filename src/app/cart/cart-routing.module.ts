import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from "./cart/cart.component";
import { AuthGuard } from "../auth/guards/auth.guard";


const routes: Routes = [
  {
    path: 'cart', component: CartComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
