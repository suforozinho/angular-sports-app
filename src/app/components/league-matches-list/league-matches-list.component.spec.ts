import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueMatchesListComponent } from './league-matches-list.component';

describe('LeagueMatchesListComponent', () => {
  let component: LeagueMatchesListComponent;
  let fixture: ComponentFixture<LeagueMatchesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueMatchesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueMatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
