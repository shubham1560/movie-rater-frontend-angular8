import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
// import { ConsoleReporter } from 'jasmine';
import { Router } from '@angular/router';

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
    private cookieService: CookieService,
    private router: Router
  ) {}

  token = "";
  authenticate() { 
    // console.log(this.authForm);
    this.apiService.loginUser(this.authForm.value).subscribe(
      (results : TokenObj )=> { 
        // console.log(results);
        this.cookieService.set("token", results.token);
        console.log("--------------cookie--------------------set");
        // console.log(this.cookieService.get("token"));
        // this.ngOnInit();
        this.router.navigate(['/main1']);
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    const mrToken = this.cookieService.get("token");
    console.log("logged In");
    // this.cookieService.delete("token");
    console.log(this.cookieService.get("token"));
    // console.log(a);
    // console.log(mrToken + "---------------from init");
    if (mrToken) {
      // this.router.navigate(['/main', '/main1']);
      this.router.navigate(['/main1']);

      console.log("logged In");
    } else { 
      console.log("logged Out");
    }
    // this.cookieService.set( 'Test', 'Hello World' );
    // this.cookieValue = this.cookieService.get('Test');
    // console.log(this.cookieValue)
  }

}
