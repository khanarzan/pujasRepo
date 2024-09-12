import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'popup-login',
  templateUrl: './popup-login.component.html',
  styleUrl: './popup-login.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class PopupLoginComponent {
  password: string = ''; // Initial password value
  passwordVisible: boolean = false;
  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
  selectedTabIndex: number = 0;

  onTabChange(event: any) {
    this.selectedTabIndex = event.index;
  }
  showContent: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
  constructor() {

  }
}
