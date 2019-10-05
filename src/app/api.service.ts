import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = "http://127.0.0.1:8000/api/movies/";

  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      // Authorization: 'Token 961414ea9cd103f1722cc82c831866f938dd0e67',
      Authorization: 'Token 0003eeaed19ab5f42392e118290e9d6ad1d4554d',
      
    }
  );

  constructor(
    private httpClient: HttpClient,
  ) { }

  getMovies() { 
    return this.httpClient.get(this.base_url, {headers:this.headers});
  }
  
  getMovie(id: number) {
    return this.httpClient.get(`${ this.base_url }${id}/`, {headers: this.headers});
  }

  rateMovie(rate: number, movieId: number) { 
    const body = { stars: rate };
    return this.httpClient.post(`${this.base_url}${movieId}/rate_movie/`, body, { headers: this.headers });
  }
}
