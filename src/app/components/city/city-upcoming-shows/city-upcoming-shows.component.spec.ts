import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CityUpcomingShowsComponent } from "./city-upcoming-shows.component";

describe("CityUpcomingShowsComponent", () => {
  let component: CityUpcomingShowsComponent;
  let fixture: ComponentFixture<CityUpcomingShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityUpcomingShowsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityUpcomingShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
