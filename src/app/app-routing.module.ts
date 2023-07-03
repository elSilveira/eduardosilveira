import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  }, {
    path: 'home',
    component: MainComponent, pathMatch: 'full'
  }, {
    path: 'about',
    component: MainComponent, pathMatch: 'full'
  }, {
    path: 'experience',
    component: MainComponent, pathMatch: 'full'
  }, {
    path: 'contact',
    component: MainComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
