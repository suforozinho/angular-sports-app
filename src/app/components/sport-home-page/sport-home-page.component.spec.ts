import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportHomePageComponent } from './sport-home-page.component';

describe('SportHomePageComponent', () => {
  let component: SportHomePageComponent;
  let fixture: ComponentFixture<SportHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
