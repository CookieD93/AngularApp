import { Component, OnInit } from '@angular/core';
import { Movie } from '../Shared/movie';
import { TmdbService } from '../tmdb.service'
import { ActivatedRoute, Router } from '@angular/router'
import {Location} from '@angular/common'


@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css'],
  providers:[TmdbService]
})

export class GenreListComponent implements OnInit {
  private movies: Movie[];
  private chosenGenre: string;

  constructor(
    private Service: TmdbService,
    private route: ActivatedRoute,
    private router: Router,
    private location : Location) { }

  ngOnInit() { this.Service.getMoviesWithId(this.route.snapshot.params['id']).subscribe(response => this.movies = response);
    this.chosenGenre = this.route.snapshot.params['genreName']
  }
  public onSelect(movie:Movie) {
    this.router.navigate(['/movie-detail', movie.id])}

  public backButton() {
    this.location.back()
  }
} 


