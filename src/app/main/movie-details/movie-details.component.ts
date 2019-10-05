import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../../api.service'; 
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
  
export class MovieDetailsComponent implements OnInit, Input {
  
  @Input()
  // movie = {};
  movie = {'title':'', 'description':'', 'average_rating':'', 'no_of_ratings':''};

  constructor(
    private apiService: ApiService,
  
  ) { }

  starsHovered = 0;
  ngOnInit() {
  }
  rateHover = function (rate) { 
    this.starsHovered = rate;
    console.log(rate);
  }

  rateClicked = function (rate) { 
    // console.log(rate);
    console.log("rateCLicked called")
    this.starsHovered = rate;
    this.apiService.rateMovie(rate, this.movie.id).subscribe(
      result => { 
        this.movieDetailUpdated(this.movie.id);

        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

  movieDetailUpdated = function (id) { 
    this.apiService.getMovie(id).subscribe(
      data => { 
        this.movie = data;
        console.log(data);
      },
      error => { 
        console.log(error);
      }
    )
  }



}
