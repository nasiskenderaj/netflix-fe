import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeatureComponent} from "../feature.component";
import {HomeComponent} from "./home/home.component";
import {TvshowsComponent} from "./tvshows/tvshows.component";

const routes: Routes = [
  {
    path:'', component:FeatureComponent,
    children:[
      {
        path:'',component:HomeComponent
      },
      {
        path:'tvshows', component:TvshowsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
