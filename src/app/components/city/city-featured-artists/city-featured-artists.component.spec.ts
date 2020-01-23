import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CityFeaturedArtistsComponent } from "./city-featured-artists.component";

describe("CityFeaturedArtistsComponent", () => {
  let component: CityFeaturedArtistsComponent;
  let fixture: ComponentFixture<CityFeaturedArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityFeaturedArtistsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityFeaturedArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
