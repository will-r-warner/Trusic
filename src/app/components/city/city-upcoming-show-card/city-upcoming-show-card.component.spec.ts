import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CityUpcomingShowCardComponent } from "./city-upcoming-show-card.component";

describe("CityUpcomingShowCardComponent", () => {
  let component: CityUpcomingShowCardComponent;
  let fixture: ComponentFixture<CityUpcomingShowCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CityUpcomingShowCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityUpcomingShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
