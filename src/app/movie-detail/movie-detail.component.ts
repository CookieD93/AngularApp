import { Component, OnInit } from '@angular/core';
import { Movie } from '../Shared/movie';
import { TmdbService } from '../tmdb.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  private movie : Movie

  constructor(
    private Service: TmdbService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.Service.getMovie(this.route.snapshot.params['title']).subscribe(response => this.movie = response[0]);
  }
  public gotoMovies(){
    this.router.navigate(['/movie-list']); 
  }

}
