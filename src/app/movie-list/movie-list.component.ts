import { Component, OnInit } from '@angular/core';
import { Movie } from '../Shared/movie';
import { TmdbService } from '../tmdb.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers:[TmdbService]
})
export class MovieListComponent implements OnInit {
  private movies: Movie[];

  constructor(
    private Service: TmdbService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() { this.Service.getMovies().subscribe(response => this.movies = response);
  }
  public onSelect(movie:Movie) {
    this.router.navigate(['/movie-detail', movie.title])
  }
} 
