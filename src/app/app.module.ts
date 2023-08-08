import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfroComponent } from './components/afro-component/afro-component.component';
import { MainModule } from './main/main.module';
import { RouteService } from './services/route.service';

@NgModule({
  declarations: [
    AppComponent,
    AfroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    CommonModule
  ],
  providers: [RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
