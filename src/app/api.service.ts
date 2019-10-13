import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = "http://127.0.0.1:8000/";
  base_movie_url = `${this.base_url}api/movies/`;

  token = this.cookieService.get("token");
  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      // Authorization: 'Token 961414ea9cd103f1722cc82c831866f938dd0e67',
      Authorization: `Token ${this.token}`,
      
    }
  );

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }

  getAuthorizationHeader() { 
    const token  = this.cookieService.get("token");
    return new HttpHeaders(
      {
        'Content-Type': 'application/json',
        // Authorization: 'Token 961414ea9cd103f1722cc82c831866f938dd0e67',
        Authorization: `Token ${token}`,
        
      }
    );
  }

  getMovies() { 
    console.log("Service called");
    return this.httpClient.get(this.base_movie_url, { headers: this.getAuthorizationHeader() });
  }
  
  getMovie(id: number) {
    return this.httpClient.get(`${ this.base_movie_url }${id}/`, {headers: this.headers});
  }

  rateMovie(rate: number, movieId: number) { 
    const body = JSON.stringify({ stars: rate });
    return this.httpClient.post(`${this.base_movie_url}${movieId}/rate_movie/`, body, { headers: this.headers });
  }

  saveMovie(movie) {
    // console.log(movie);
    console.log("-------------service called------------------");
    const body = JSON.stringify({ title: movie.title, description: movie.description });
    console.log(body);
    return this.httpClient.post(`${this.base_movie_url}`, body, { headers: this.headers });
  }

  deleteMovie( movieId: number) { 
    return this.httpClient.delete(`${this.base_movie_url}${movieId}/`, {headers: this.headers});
  }

  loginUser(authData) { 
    console.log(authData);
    // const body = JSON.stringify(authData);
    const body = authData;
    console.log(body);
    console.log("from Service--------------");
    return this.httpClient.post("http://127.0.0.1:8000/auth/", body);

    // return this.httpClient.post(`${this.base_url}auth/`, body, { headers: this.headers });
  }

}
