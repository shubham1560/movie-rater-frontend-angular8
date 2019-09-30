import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../../api.service'; 

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, Input {
  
  @Input()
  movie = {};

  constructor(
    private ApiService : ApiService,
  ) { }

  ngOnInit() {
    // this.ApiService.getMovie(1).subscribe(
    //   data => {
    //     this.movie = data;
    //     console.log("-------movie-details-----------");
    //     console.log(data);
    //     console.log("-------------------------------");
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
  }

}
