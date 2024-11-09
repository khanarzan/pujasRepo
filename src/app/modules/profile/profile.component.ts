import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class ProfileComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
  activeTab: string = '';

  setActiveTab(tab: string) {
    this.activeTab = this.activeTab === tab ? '' : tab; // Toggle the tab
  }
}
