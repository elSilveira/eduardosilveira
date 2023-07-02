import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTabsComponent } from './main-tabs.component';

describe('MainTabsComponent', () => {
  let component: MainTabsComponent;
  let fixture: ComponentFixture<MainTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainTabsComponent]
    });
    fixture = TestBed.createComponent(MainTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
