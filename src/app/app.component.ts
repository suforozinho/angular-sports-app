import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-futebol-teste';

  activeTab: string = '';
  infoActiveTab: string = '';
  extraInfoDisplay: boolean = false;

  changeTab(tabName: string): void {
    this.activeTab = tabName;
  }

  changeInfoActiveTab(tabName: string): void {
    this.infoActiveTab = tabName;
  }

  viewExtraInfo() {
    this.extraInfoDisplay = !this.extraInfoDisplay;
  }
}
