import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service'; 

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie = {};

  constructor(
    private ApiService : ApiService,
  ) { }

  ngOnInit() {
    this.ApiService.getMovie(1).subscribe(
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
