import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TabComponentComponent } from "../components/tab-component/tab-component.component";
import { MainTabsComponent } from "./main-tabs/main-tabs.component";
import { MainComponent } from "./main.component";


@NgModule({
  declarations: [
    MainComponent,
    MainTabsComponent
  ],
  exports: [
    MainComponent
  ],
  imports:[
    TabComponentComponent,
    CommonModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }