import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { items, keyUrls, tags } from "src/app/services/afro.service";

@Component({
  selector: 'app-afro-component',
  template: ''
})
export class AfroComponent {
  keyUrl: any;
  private getSubdomain(): string {
    const hostname = window.location.host;
    const parts = hostname.split('.');
    return parts[0]; // Retorna o primeiro segmento da URL (o subdomínio)
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        let spl = ev.url.split('/');
        this.keyUrl = spl[spl.length-1];
        this.keyUrl = Object.values(keyUrls)[Object.keys(keyUrls).indexOf(this.keyUrl.toLowerCase())];
        this.gotoNext();
      }
    });
  }

  private gotoNext() {
    let tag = Object.keys(tags).filter(t => t.toLowerCase() == this.getSubdomain().toLowerCase())[0];
    if (tag) {
      let tagId = Object.values(tags)[Object.keys(tags).indexOf(tag)];
      let url = Object.values(items).filter(it => it.id == tagId)[0].urls.filter(url => url.key === this.keyUrl)[0].link;
      window.open(url, '_self')
    }
  }
}