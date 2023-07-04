import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  private currentX:any;
  private lastX = 0;
  private lastT:any;

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

    addEventListener("touchmove", (e) => {
      this.currentX = e.touches[0].clientX;      
      if (this.currentX < this.lastX) {
        this.navigateTo(false);
      } else if (this.currentX > this.lastX) {
        this.navigateTo(true);
      }

      // Save last position
      this.lastX = this.currentX;

    }, false);
  }


  navigateTo(next = true) {
    this.routeService.navigateTo(next)
  }

}
