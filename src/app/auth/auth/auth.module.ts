import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthComponent} from "./auth/auth.component";
import { RegisterComponent } from './register/register.component';
import {AuthorizationComponent} from "./authorization.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";



@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    AuthorizationComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    CalendarModule,
    ReactiveFormsModule,

  ]
})
export class AuthModule { }
