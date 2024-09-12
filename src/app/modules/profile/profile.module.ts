import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageLoginComponent } from './full-page-login/full-page-login.component';
import { PopupLoginComponent } from './popup-login/popup-login.component';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';

// const routes: Routes = [
//   {
    
//   },
// ]

@NgModule({
  declarations: [
    ProfileComponent,
    PopupLoginComponent,
    FullPageLoginComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    FormsModule,
    // RouterModule.forChild(routes)
  ]
  ,
  exports: [
    PopupLoginComponent,
  ]
})
export class ProfileModule { }
