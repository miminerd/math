import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  DegreeComponent } from './components/degree/degree.component';


const routes: Routes = [
  { path: '', redirectTo: '/degree', pathMatch: 'full' },
  { path: 'degree',      component: DegreeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
