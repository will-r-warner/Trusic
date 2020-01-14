import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpcomingShowsComponent } from './home-upcoming-shows.component';

describe('HomeUpcomingShowsComponent', () => {
  let component: HomeUpcomingShowsComponent;
  let fixture: ComponentFixture<HomeUpcomingShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeUpcomingShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUpcomingShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
