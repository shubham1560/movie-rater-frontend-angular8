import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
// import { ConsoleReporter } from 'jasmine';

interface TokenObj { 
  token: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private apiService: ApiService,
    private cookieService : CookieService
  ) {}

  token = "";
  authenticate() { 
    // console.log(this.authForm);
    this.apiService.loginUser(this.authForm.value).subscribe(
      (results : TokenObj )=> { 
        // console.log(results);
        this.cookieService.set("token", results.token);
        console.log(this.cookieService.get("token"));
      },
      error => {
        console.log(error);
      }
    )
  }


  ngOnInit() {
    // this.cookieService.set( 'Test', 'Hello World' );
    // this.cookieValue = this.cookieService.get('Test');
    // console.log(this.cookieValue)
  }

}
