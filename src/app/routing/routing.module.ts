import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from '../movie-list/movie-list.component'
import { MovieDetailComponent } from '../movie-detail/movie-detail.component'
import { LoginComponent } from '../login/login.component';
import { GenreListComponent } from '../genre-list/genre-list.component';

const appRoutes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-detail/:title', component: MovieDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'genre-list/:id/:genreName', component:GenreListComponent},

  { path: '', redirectTo: '/movie-list', pathMatch: 'full' },
  { path: '**', component: MovieListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)

  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
