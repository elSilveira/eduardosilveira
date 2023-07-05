import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private route: ActivatedRoute, public routeService: RouteService) {
    addEventListener("wheel", (event) => {
      //To Bottom
      if (event.deltaY > 0) {
        this.navigateTo(true);
      } else {
        this.navigateTo(false);
      }
      event.stopPropagation();
    });
  }
  downOn = 0;
  mousedown(event: any) {
    if (event.target && (event.target instanceof HTMLImageElement || event.target.id === 'eds')) return;
    this.downOn = event.clientX;
  }
  mouseup(event: any) {
    if (event.target && (event.target instanceof HTMLImageElement || event.target.id === 'eds')) return;
    if (this.downOn > event.clientX) {
      this.navigateTo(false);
    } else if (this.downOn < event.clientX) {
      this.navigateTo(true);
    }
  }
  touchstart(event: any) {
    if (event.target && (event.target instanceof HTMLImageElement || event.target.id === 'eds')) return;
    this.downOn = event.changedTouches[0].clientX;
  }
  touchend(event: any) {
    if (event.target && (event.target instanceof HTMLImageElement || event.target.id === 'eds')) return;
    if (this.downOn > event.changedTouches[0].clientX) {
      this.navigateTo(false);
    } else if (this.downOn < event.changedTouches[0].clientX) {
      this.navigateTo(true);
    }
  }

  navigateTo(next = true) {
    this.routeService.navigateTo(next)
  }

}
