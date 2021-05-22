import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { Movie } from './movie';
import { Movies } from './movie.data';


@Injectable({
  providedIn: 'root'
})
export class  MovieService {


  constructor(private loggingService: LoggingService) {
    
   }
   ngOnInit(): void {
     
  }

  getMovies(): Observable<Movie[]>
  {
    return of(Movies);
  }
}
