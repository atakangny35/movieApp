import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent   {
  title = "MovieList";
  
  movies !: Movie[];
  selectedMovie!:Movie;
  _movieService!:MovieService;
  constructor( MovieService:MovieService){
    this._movieService=MovieService;
  }

    ngOnInit(): void{

      this.getMovies();
    }  

  onSelect(movie:Movie):void
  {   
    this.selectedMovie=movie;
    
  }
  getMovies():void
  {

    this._movieService.getMovies().subscribe(movies => {this.movies=movies;});
    
  }
}


