import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, Input {

  @Input()   
  movies = [];
  @Output() selectMovie = new EventEmitter();
  @Output() editMovie = new EventEmitter();

  movieClicked(movie) {
    this.selectMovie.emit(movie);
  }

  movieEdit(movie) {
    this.editMovie.emit(movie);
  }

  ngOnInit() {
  }

}
