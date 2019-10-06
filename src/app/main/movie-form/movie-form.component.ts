import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Input()
  movie = {'title':'', 'description':'', 'average_rating':'', 'no_of_ratings':''};
  SaveValue = {};

  movieForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private apiService: ApiService,
  ) { }

  editMovie = function (movie) {
    console.log(movie);
  }

  movieFormSave() { 
    this.SaveValue = this.movieForm.value;
    this.apiService.saveMovie(this.SaveValue).subscribe(
      results => { 
        console.log(results);
      }
    );
  }
  ngOnInit() {
    // console.log("------form------");
    //console.log(this.movie);
    //console.log("----------------");
  }

}
