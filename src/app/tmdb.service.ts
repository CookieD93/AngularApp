import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Movie } from './Shared/movie'
import 'rxjs/add/operator/map'

interface IMovieData {results : Movie[];}

@Injectable()
export class TmdbService {

 
  
  constructor(private http: Http) {  }

  public getMovie(id : number) {
    return this.http.get("http://api.themoviedb.org/3/movie/" + id + "?api_key=8dcf8e2c3fb3626f184505f02cd776b3")
     .map(response => response.json())}

  //https://api.themoviedb.org/4/list/1?api_key=8dcf8e2c3fb3626f184505f02cd776b3
  public getMovies() : Observable<Movie[]> {
    return this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=8dcf8e2c3fb3626f184505f02cd776b3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false")
    .map(response => {
      const data : IMovieData = response.json();
      return data.results.filter(movie => movie.poster_path !== null).map(movie => 
        {return <Movie>{'id' : movie.id,
        'title' : movie.title,
        'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+movie.poster_path, 
        'adult' : movie.adult,
        'overview' : movie.overview,
        'release_date' : movie.release_date,
        'genre_ids' : movie.genre_ids,
        'vote_average' : movie.vote_average }})

    })
  }
  public getMoviesWithId(id : number) : Observable<Movie[]> {
    return this.http.get("https://api.themoviedb.org/3/genre/" + id + "/movies?api_key=8dcf8e2c3fb3626f184505f02cd776b3&language=en-US&include_adult=false&sort_by=created_at.asc")
    .map(response => {
      const data : IMovieData = response.json();
      return data.results.filter(movie => movie.poster_path !== null).map(movie => 
        {return <Movie>{'id' : movie.id,
        'title' : movie.title,
        'poster_path' : "https://image.tmdb.org/t/p/w185_and_h278_bestv2"+movie.poster_path, 
        'adult' : movie.adult,
        'overview' : movie.overview,
        'release_date' : movie.release_date,
        'genre_ids' : movie.genre_ids,
        'vote_average' : movie.vote_average }})
  }
    )}
}

