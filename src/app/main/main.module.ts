import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TabComponentComponent } from "../components/tab-component/tab-component.component";
import { AboutComponent } from "./main-tabs/about/about.component";
import { ContactComponent } from "./main-tabs/contact/contact.component";
import { ExperienceComponent } from "./main-tabs/experience/experience.component";
import { HomeComponent } from "./main-tabs/home/home.component";
import { MainComponent } from "./main.component";


@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    HomeComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    TabComponentComponent,
    CommonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
