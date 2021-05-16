import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import { Movies } from '../movie.data';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent   {
  title = "MovieList";
  movies= Movies;
  selectedMovie!:Movie;
  onSelect(movie:Movie):void
  {   
    this.selectedMovie=movie;
    
  }

}


