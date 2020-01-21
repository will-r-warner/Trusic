import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPreferencesComponent } from './sign-up-preferences.component';

describe('SignUpPreferencesComponent', () => {
  let component: SignUpPreferencesComponent;
  let fixture: ComponentFixture<SignUpPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
