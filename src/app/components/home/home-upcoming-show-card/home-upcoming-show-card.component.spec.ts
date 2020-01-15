import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpcomingShowCardComponent } from './home-upcoming-show-card.component';

describe('HomeUpcomingShowCardComponent', () => {
  let component: HomeUpcomingShowCardComponent;
  let fixture: ComponentFixture<HomeUpcomingShowCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUpcomingShowCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUpcomingShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
