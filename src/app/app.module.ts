import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service'

import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "",  pathMatch: "full", redirectTo: 'main'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    MainModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],

  exports: [
    RouterModule,
  ],

  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
