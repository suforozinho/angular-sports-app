import { EventEmitter } from '@angular/core';
import { Component, Output  } from '@angular/core';

@Component({
  selector: 'app-league-match',
  templateUrl: './league-match.component.html',
  styleUrls: ['./league-match.component.css']
})
export class LeagueMatchComponent {
  @Output("displayExtraInfo") displayExtraInfo: EventEmitter<void> = new EventEmitter();

  bookmarkMatches = {
    match1: false,
    match2: false,
    match3: false,
    match4: false,
    match5: false,
    match6: false
  };

  bookmarkMatch(matchName: string) {
    this.bookmarkMatches[matchName] = !this.bookmarkMatches[matchName]
  }

  viewMore() {
    this.displayExtraInfo.emit();
  }
}
