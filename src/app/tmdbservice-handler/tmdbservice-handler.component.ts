import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { Movie } from '../Shared/movie'

@Component({
  selector: 'app-tmdbservice-handler',
  templateUrl: './tmdbservice-handler.component.html',
  styleUrls: ['./tmdbservice-handler.component.css'],
  providers: [TmdbService]
})
export class TmdbserviceHandlerComponent implements OnInit {

  movies: Movie[]

  constructor(service: TmdbService) {
    service.getMovies().subscribe(response => this.movies = response)
  }

  ngOnInit() {
  }

}
