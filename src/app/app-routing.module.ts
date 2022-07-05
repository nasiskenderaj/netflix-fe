import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth/auth/auth.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/auth',
    pathMatch:'full'
  },
  {
    path: 'auth',
    loadChildren:()=> import('./auth/auth/auth.module').then(m=>m.AuthModule)  },
  {
    path: 'list',
    loadChildren:()=> import('./features/features/feature.module').then(m=>m.FeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
