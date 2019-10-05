import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  @Input()
  movie = {'title':'', 'description':'', 'average_rating':'', 'no_of_ratings':''};


  constructor() { }

  ngOnInit() {
    console.log("------form------");
    console.log(this.movie);
    console.log("----------------");
  }

}
