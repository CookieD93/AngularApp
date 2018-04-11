import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Movie } from './Shared/movie'
import 'rxjs/add/operator/map'

interface IMovieData {results : Movie[];}

@Injectable()
export class TmdbService {

  
  private request$: Observable<Movie[]>

  constructor(private http: Http) { this.request$ = http.get('https://api.themoviedb.org/4/list/1?api_key=8dcf8e2c3fb3626f184505f02cd776b3').map(response => response.json().results) }


  
  public getMovie(title : string) : Observable<Movie[]> {
    return this.http.get("http://api.themoviedb.org/4/search/movie?query=" + title + "&api_key=8dcf8e2c3fb3626f184505f02cd776b3")
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
  public getMovies() : Observable<Movie[]> {
    return this.http.get("https://api.themoviedb.org/4/list/1?api_key=8dcf8e2c3fb3626f184505f02cd776b3")
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
}
