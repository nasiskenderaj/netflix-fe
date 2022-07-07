import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthComponent} from "./auth/auth.component";
import { RegisterComponent } from './register/register.component';
import {AuthorizationComponent} from "./authorization.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/calendar";
import {CardModule} from "primeng/card";
import {DialogModule} from "primeng/dialog";



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
    CardModule,
    DialogModule,

  ]
})
export class AuthModule { }
