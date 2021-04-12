import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarActive: string = '';

  changeSidebarActive(itemName: string): void {
    this.sidebarActive = itemName;
  }
}
