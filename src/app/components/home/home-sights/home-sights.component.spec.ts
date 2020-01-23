import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSightsComponent } from './home-sights.component';

describe('HomeSightsComponent', () => {
  let component: HomeSightsComponent;
  let fixture: ComponentFixture<HomeSightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
