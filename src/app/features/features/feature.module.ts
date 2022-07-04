import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import {FeatureComponent} from "../feature.component";
import { TvshowsComponent } from './tvshows/tvshows.component';
import {FileSaverModule} from "ngx-filesaver";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    HomeComponent,
    FeatureComponent,
    TvshowsComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FileSaverModule,
    HttpClientModule
  ]
})
export class FeatureModule {
}
