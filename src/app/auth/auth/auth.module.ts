import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';
import {FileSaverModule} from "ngx-filesaver";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
FileSaverModule
  ]
})
export class AuthModule { }
