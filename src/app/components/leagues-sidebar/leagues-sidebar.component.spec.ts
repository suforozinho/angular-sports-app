import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesSidebarComponent } from './leagues-sidebar.component';

describe('LeaguesSidebarComponent', () => {
  let component: LeaguesSidebarComponent;
  let fixture: ComponentFixture<LeaguesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaguesSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
