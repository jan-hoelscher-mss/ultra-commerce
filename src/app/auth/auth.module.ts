import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthService } from "./services/auth.service";
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialModule
  ],
  providers: [AuthService]
})
export class AuthModule { }

