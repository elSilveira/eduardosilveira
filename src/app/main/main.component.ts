import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routes } from '../app-routing.module';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private route: ActivatedRoute, public routeService: RouteService) {
  }

  navigateTo(next = true) {
    this.routeService.navigateTo(next)
  }

  dots = routes.map(r => { return r.path });

}
