import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TmdbserviceHandlerComponent } from './tmdbservice-handler/tmdbservice-handler.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RoutingModule } from './routing/routing.module';
import { TmdbService } from './tmdb.service';
import { LoginComponent } from './login/login.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { AuthServiceService } from './Auth/auth-service.service';
import { LockedPageComponent } from './locked-page/locked-page.component';
import { AuthGuardService } from './AuthGuard/auth-guard.service';


 
@NgModule({
  declarations: [
    AppComponent,
    TmdbserviceHandlerComponent,
    MovieListComponent,
    MovieDetailComponent,
    LoginComponent,
    GenreListComponent,
    LockedPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RoutingModule
  ],
  providers:[TmdbService,AuthServiceService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
