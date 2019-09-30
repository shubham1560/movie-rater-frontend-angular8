import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, Input {

  // movies = ['Terminator', 'Shermanator'];

  @Input()
  movies =[];

  @Output() selectMovie = new EventEmitter();

  constructor(
    private apiService: ApiService,
  ) { }

  movieClicked(movie) {
    console.log(movie);
    this.selectMovie.emit(movie);
    console.log(this.selectMovie);  
  }

  ngOnInit() {
    // this.apiService.getMovies().subscribe(
    //   data => {
    //     console.log('---------movie-list----------');
    //     console.log(data);
    //     console.log("-----------------------------");
    //     this.movies = data;
    //   },
    //   error => { console.log(error); }
    // );

    
    // this.apiService.getMovie(1).subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
  }

}
