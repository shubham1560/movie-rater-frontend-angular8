import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: 'auth' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    AuthModule,
    MainModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],

  exports: [
    RouterModule,
  ],

  providers: [
    CookieService,
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
