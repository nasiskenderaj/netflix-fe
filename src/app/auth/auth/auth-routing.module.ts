import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeatureComponent} from "../../features/feature.component";
import {HomeComponent} from "../../features/features/home/home.component";
import {TvshowsComponent} from "../../features/features/tvshows/tvshows.component";
import {AuthComponent} from "./auth/auth.component";
import {RegisterComponent} from "./register/register.component";
import {AuthorizationComponent} from "./authorization.component";
import {DeactivateGuard} from "../../core/deactivate.guard";

const routes: Routes = [
  {
    path:'', component:AuthorizationComponent,
    children:[
      {
        path:'',component:AuthComponent,

      },
      {
        path:'register',component:RegisterComponent,
        canDeactivate:[DeactivateGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
