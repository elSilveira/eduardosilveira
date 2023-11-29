import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/main-tabs/about/about.component';
import { ContactComponent } from './main/main-tabs/contact/contact.component';
import { CopilotComponent } from './main/main-tabs/copilot/copilot.component';
import { ExperienceComponent } from './main/main-tabs/experience/experience.component';
import { HomeComponent } from './main/main-tabs/home/home.component';
import { ProjectsComponent } from './main/main-tabs/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, pathMatch: 'full'
  }, {
    path: 'about',
    component: AboutComponent, pathMatch: 'full'
  }, {
    path: 'experience',
    component: ExperienceComponent, pathMatch: 'full'
  }, {
    path: 'projects',
    component: ProjectsComponent, pathMatch: 'full'
  }, {
    path: 'contact',
    component: ContactComponent, pathMatch: 'full'
  }, {
    path: 'copilot',
    component: CopilotComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
