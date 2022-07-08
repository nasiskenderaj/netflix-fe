import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './features/home/home.component';
import {FeatureComponent} from "./feature.component";
import { TvshowsComponent } from './features/tvshows/tvshows.component';
import {FileSaverModule} from "ngx-filesaver";
import {HttpClientModule} from "@angular/common/http";
import {UiGridComponent} from "../shared/ui-grid/ui-grid.component";


@NgModule({
  declarations: [
    HomeComponent,
    FeatureComponent,
    TvshowsComponent,
    UiGridComponent
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
