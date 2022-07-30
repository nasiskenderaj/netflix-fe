import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {AppRoutingModule} from "./app-routing.module";
import {FeatureModule} from "./features/feature.module";
import {AuthModule} from "./auth/auth/auth.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {ProfileComponent} from "./features/profile/profile.component";
import {NgxPayPalModule} from "ngx-paypal";
import {FileSaverModule} from "ngx-filesaver";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {FileUploadModule} from "primeng/fileupload";


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    FontAwesomeModule,
    AppRoutingModule,
    FeatureModule,
    AuthModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPayPalModule,
    FileSaverModule,
    DialogModule,
    ButtonModule,
    FileUploadModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
