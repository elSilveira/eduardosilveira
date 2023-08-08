import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfroComponent } from './components/afro-component/afro-component.component';
import { AboutComponent } from './main/main-tabs/about/about.component';
import { ContactComponent } from './main/main-tabs/contact/contact.component';
import { ExperienceComponent } from './main/main-tabs/experience/experience.component';
import { HomeComponent } from './main/main-tabs/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'about',
    component: AboutComponent, pathMatch: 'full'
  }, {
    path: 'experience',
    component: ExperienceComponent, pathMatch: 'full'
  }, {
    path: 'contact',
    component: ContactComponent, pathMatch: 'full'
  }, {
    path: 'twitter',
    component: AfroComponent
  }, {
    path: 'amazon',
    component: AfroComponent
  }, {
    path: 'twitch',
    component: AfroComponent
  }, {
    path: 'youtube',
    component: AfroComponent
  }, {
    path: 'email',
    component: AfroComponent
  }, {
    path: 'instagram',
    component: AfroComponent
  }, {
    path: 'insta',
    component: AfroComponent
  }, {
    path: 'tiktok',
    component: AfroComponent
  }, {
    path: 'whatsapp',
    component: AfroComponent
  }, {
    path: 'zap',
    component: AfroComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
