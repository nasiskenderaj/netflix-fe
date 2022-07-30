import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeatureComponent} from "./feature.component";
import {HomeComponent} from "./features/home/home.component";
import {TvshowsComponent} from "./features/tvshows/tvshows.component";
import {ProfileComponent} from "./profile/profile.component";
import {SearchComponent} from "./features/search/search.component";
import {MovieByCategoryComponent} from "./features/movie-by-category/movie-by-category.component";
import {ActionMoviesComponent} from "./features/action-movies/action-movies.component";
import {ComedyMoviesComponent} from "./features/comedy-movies/comedy-movies.component";
import {RomanceMoviesComponent} from "./features/romance-movies/romance-movies.component";
import {UserlistComponent} from "./features/userlist/userlist.component";

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
      {
        path:'userlist', component:UserlistComponent
      },
      {
        path:'search/:id', component:SearchComponent
      },
      {
        path:'moviesByCategory/:id', component:MovieByCategoryComponent,pathMatch:'full'
      },

      {
        path:'actionMovies', component:ActionMoviesComponent,pathMatch:'full'
      },
      {
        path:'comedyMovies', component:ComedyMoviesComponent,pathMatch:'full'
      },
      {
        path: 'romanceMovies', component:RomanceMoviesComponent,pathMatch:'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
