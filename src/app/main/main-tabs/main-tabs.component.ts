import { Component } from '@angular/core';

@Component({
  selector: 'app-main-tabs',
  templateUrl: './main-tabs.component.html',
  styleUrls: ['./main-tabs.component.scss']
})
export class MainTabsComponent {

  getTab() {
    switch (this.actualTab) {
      case 0: return 'about';
      case 1: return 'biography';
      case 2: return 'photos';
      case 3: return 'cases';
      default: return 'contact';
    }
  }
  isScrolling: boolean = false;
  scrollingPosition: number = 0;
  actualTab: number = 0;
  startTimer = () => {setTimeout(() => this.isScrolling = false, 300)}
  onScroll(event: any) {
    if (this.isScrolling) return;
    this.isScrolling = true;
    var currentScrollPos = event.target.offsetTop || event.target.scrollTop;
    if (currentScrollPos > this.scrollingPosition) {
      this.actualTab++;
    }
    else {
      this.actualTab = this.actualTab < 0 ? 0 : this.actualTab - 1;
    }
    this.scrollingPosition = currentScrollPos;
    let tab = this.getTab();

    const elementList = document.querySelectorAll('.' + tab);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
    this.scrollingPosition = event.target.offsetTop || event.target.scrollTop;
    
    this.startTimer();
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

}
