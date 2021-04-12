import { Component } from '@angular/core';

@Component({
  selector: 'app-leagues-sidebar',
  templateUrl: './leagues-sidebar.component.html',
  styleUrls: ['./leagues-sidebar.component.css']
})
export class LeaguesSidebarComponent {
  leaguesSidebarIsOpen = false;
  activeLeague: string = '';
  leaguesNavbarSection: string = '';

  openCloseLeagueSidebar() {
    this.leaguesSidebarIsOpen = !this.leaguesSidebarIsOpen;
  }

  changeLeagueActive(leagueName: string): void {
    this.activeLeague = leagueName;
  }

  changeLeaguesNavbarSection(tabName: string) {
    this.leaguesNavbarSection = tabName;
  }
}
