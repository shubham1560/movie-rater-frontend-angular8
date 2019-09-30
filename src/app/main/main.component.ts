import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movie = {};
  constructor(
    private apiService : ApiService,
  ) { }

  ngOnInit() {
    this.apiService.getMovie(1).subscribe(
      data => {
        console.log("------------main---------------");
        console.log(data);
        this.movie = data;
        console.log("-------------------------------");
      },
      error => {
        console.log(error);
      }
    )
  }

}
