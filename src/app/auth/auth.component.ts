import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private apiService : ApiService
  ) {}

  authenticate() { 
    console.log(this.authForm);
    this.apiService.loginUser(this.authForm.value);
  }


  ngOnInit() {
  }

}
