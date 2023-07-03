import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/main-tabs/about/about.component';
import { ContactComponent } from './main/main-tabs/contact/contact.component';
import { ExperienceComponent } from './main/main-tabs/experience/experience.component';
import { HomeComponent } from './main/main-tabs/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent, pathMatch: 'full'
  }, {
    path: 'about',
    component: AboutComponent, pathMatch: 'full'
  }, {
    path: 'experience',
    component: ExperienceComponent, pathMatch: 'full'
  }, {
    path: 'contact',
    component: ContactComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
