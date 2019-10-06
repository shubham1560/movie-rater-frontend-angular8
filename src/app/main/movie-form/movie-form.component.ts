import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Input()
  movie = {'title':'', 'description':'', 'average_rating':'', 'no_of_ratings':''};

  movieForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor() { }

  editMovie = function (movie) {
    console.log(movie);
  }
  ngOnInit() {
    // console.log("------form------");
    //console.log(this.movie);
    //console.log("----------------");
  }

}
