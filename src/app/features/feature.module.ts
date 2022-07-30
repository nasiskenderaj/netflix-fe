import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './features/home/home.component';
import {FeatureComponent} from "./feature.component";
import { TvshowsComponent } from './features/tvshows/tvshows.component';
import {FileSaverModule} from "ngx-filesaver";
import {HttpClientModule} from "@angular/common/http";
import {UiGridComponent} from "../shared/ui-grid/ui-grid.component";
import { SearchComponent } from './features/search/search.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MovieByCategoryComponent } from './features/movie-by-category/movie-by-category.component';
import { ActionMoviesComponent } from './features/action-movies/action-movies.component';
import { ComedyMoviesComponent } from './features/comedy-movies/comedy-movies.component';
import { RomanceMoviesComponent } from './features/romance-movies/romance-movies.component';
import { UserlistComponent } from './features/userlist/userlist.component';


 @NgModule({
  declarations: [
    HomeComponent,
    FeatureComponent,
    TvshowsComponent,
    UiGridComponent,
    SearchComponent,
    MovieByCategoryComponent,
    ActionMoviesComponent,
    ComedyMoviesComponent,
    RomanceMoviesComponent,
    UserlistComponent
  ],
   imports: [
     CommonModule,
     FeaturesRoutingModule,
     FileSaverModule,
     HttpClientModule,
     ReactiveFormsModule
   ]
 })
 export class FeatureModule {
 }
