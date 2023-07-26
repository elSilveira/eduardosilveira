import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curr';

  constructor(){
    gtag('config', 'G-BN2ZRSGRV4');
  }

}
declare var gtag: any;