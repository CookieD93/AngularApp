import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { TmdbserviceHandlerComponent } from './tmdbservice-handler/tmdbservice-handler.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RoutingModule } from './routing/routing.module';
import { TmdbService } from './tmdb.service';
import { LoginComponent } from './login/login.component';
import { GenreListComponent } from './genre-list/genre-list.component';

 
@NgModule({
  declarations: [
    AppComponent,
    TmdbserviceHandlerComponent,
    MovieListComponent,
    MovieDetailComponent,
    LoginComponent,
    GenreListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutingModule
  ],
  providers:[TmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
