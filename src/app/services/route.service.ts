import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { routes } from "../app-routing.module";

@Injectable()
export class RouteService {
  private actual$ = new BehaviorSubject('');
  get actual() { return this.actual$.value; }

  constructor(private router: Router) {
    router.events.subscribe(
      ev => {
        if (ev instanceof NavigationEnd) {
          let path = ev.url.split('/');
          this.actual$.next(path[path.length - 1])

        }
      }
    )
  }
  navigating = false;
  navigateTo(next = true) {
    if (this.navigating) { return; }
    this.navigating = true;
    let pos = routes.map(val => val.path).indexOf(this.actual);
    pos = pos < 0 ? 0 : pos;
    let nextPath = routes[pos + (next ? 1 : -1)] ?? routes[(next ? 0 : routes.length - 1)];
    this.router.navigate([nextPath.path], {skipLocationChange: true});
    setTimeout(
      () => {
        this.navigating = false;
      }, 300
    )
  }

}