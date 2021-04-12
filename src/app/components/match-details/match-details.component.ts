import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent {
  @Output("displayExtraInfo") displayExtraInfo: EventEmitter<void> = new EventEmitter();

  extraInfoTabActive: string = '';

  close() {
    this.displayExtraInfo.emit();
  }

  changeExtraInfoTabActive(tabName: string): void {
    this.extraInfoTabActive = tabName;
  }
}
