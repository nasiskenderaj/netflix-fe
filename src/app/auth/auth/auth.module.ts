import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthComponent} from "./auth/auth.component";
import { RegisterComponent } from './register/register.component';
import {AuthorizationComponent} from "./authorization.component";


@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
