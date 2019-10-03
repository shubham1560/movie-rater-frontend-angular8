import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  { path: 'main1', component: MainComponent },
  { path:'main', component: MovieListComponent}
];

@NgModule({
  declarations: [MainComponent, MovieDetailsComponent, MovieFormComponent, MovieListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFontAwesomeModule
  ],

  exports: [
    RouterModule,
  ]
})
export class MainModule { }
