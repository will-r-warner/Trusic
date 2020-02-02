import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLocationModalComponent } from './map-location-modal.component';

describe('MapLocationModalComponent', () => {
  let component: MapLocationModalComponent;
  let fixture: ComponentFixture<MapLocationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLocationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
