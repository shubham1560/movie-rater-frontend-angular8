import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  // movies = ['Terminator', 'Shermanator'];

  movies = [];

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.getMovies().subscribe(
      data => {
        console.log(data);
        this.movies = data;
      },
      error => { console.log(error); }
    );
  }

}
