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
  constructor(
    private apiService : ApiService,
  ) { }
  
  selectMovie(movie) {
    this.movie = movie;
  }

  ngOnInit() {
    this.apiService.getMovies().subscribe(
      data => {
        console.log(data);
        this.movies = data;
      }, 
      error => {
        console.log(error);
      }
    )


    this.apiService.getMovie(1).subscribe(
      data => {
        console.log("------------main---------------");
        console.log(data);
        //this.movie = data;
        console.log("-------------------------------");
      },
      error => {
        console.log(error);
      }
    )
  }

}
