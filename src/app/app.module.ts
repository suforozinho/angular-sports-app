import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LeaguesSidebarComponent } from './components/leagues-sidebar/leagues-sidebar.component';
import { SportHomePageComponent } from './components/sport-home-page/sport-home-page.component';
import { LeagueMatchesListComponent } from './components/league-matches-list/league-matches-list.component';
import { LeagueMatchComponent } from './components/league-match/league-match.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    LeaguesSidebarComponent,
    SportHomePageComponent,
    LeagueMatchesListComponent,
    LeagueMatchComponent,
    MatchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
