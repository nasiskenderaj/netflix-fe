import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth/auth/auth.component";
import {ProfileComponent} from "./features/profile/profile.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/auth',
    pathMatch:'full'
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path: 'auth',
    loadChildren:()=> import('./auth/auth/auth.module').then(m=>m.AuthModule)  },
  {
    path: 'list',
    loadChildren:()=> import('./features/feature.module').then(m=>m.FeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
