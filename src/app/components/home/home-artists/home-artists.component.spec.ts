import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArtistsComponent } from './home-artists.component';

describe('HomeArtistsComponent', () => {
  let component: HomeArtistsComponent;
  let fixture: ComponentFixture<HomeArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
