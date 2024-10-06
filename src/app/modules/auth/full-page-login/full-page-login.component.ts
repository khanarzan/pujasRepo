import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-full-page-login',
  standalone: true,
  imports: [  
    DialogModule,
    CommonModule,
    TabViewModule,
    FormsModule,
    DropdownModule,RouterModule],
  templateUrl: './full-page-login.component.html',
  styleUrl: './full-page-login.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class FullPageLoginComponent {
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
