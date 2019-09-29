import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';

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
    RouterModule.forRoot(routes),
  ],

  exports: [
    RouterModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
