import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeaturedArtistsComponent } from './home-featured-artists.component';

describe('HomeFeaturedArtistsComponent', () => {
  let component: HomeFeaturedArtistsComponent;
  let fixture: ComponentFixture<HomeFeaturedArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFeaturedArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeaturedArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
