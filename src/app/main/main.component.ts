import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movie = {};
  movies = [];

  movieDetails = false;
  movieEdit = false;
  newMovieB = false;
  
  constructor(
    private apiService : ApiService,
  ) { }
  
  selectMovie(movie) {
    this.movie = movie;
    this.movieDetails = true;
  
  }

  editMovie(movie) {
    console.log("------------from main--------------");
    this.movie = movie;
    this.movieEdit = true;
  }

  newMovie() {
    this.newMovieB = true;
    console.log("Emmited from main------------");
  }

  ngOnInit() {
    this.apiService.getMovies().subscribe(
      data => {
        console.log(data);
        this.movies.push(data);
        console.log(this.movies);
      }, 
      error => {
        console.log(error);
      }
    )


    // this.apiService.getMovie(1).subscribe(
    //   data => {
    //     console.log("------------main---------------");
    //     console.log(data);
    //     //this.movie = data;
    //     console.log("-------------------------------");
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
  }

}
