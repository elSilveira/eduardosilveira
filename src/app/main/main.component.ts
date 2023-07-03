import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private route: ActivatedRoute, private routeService: RouteService) {
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

  navigateTo(next = true) {
    this.routeService.navigateTo(next)
  }
}
