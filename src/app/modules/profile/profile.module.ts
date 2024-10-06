import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageLoginComponent } from '../auth/full-page-login/full-page-login.component';
import { PopupLoginComponent } from './popup-login/popup-login.component';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumComponent } from '../../common/breadcrum/breadcrum.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileOrderComponent } from './profile-order/profile-order.component';
import { ProfileAddressComponent } from './profile-address/profile-address.component';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';

const routes: Routes = [
  {
    path: 'manage',
    component:ProfileComponent
},
]

@NgModule({
  declarations: [
    PopupLoginComponent,
    ProfileComponent,
    ProfileDetailComponent,
    ProfileOrderComponent,
    ProfileAddressComponent
  ],
  imports: [
    BreadcrumComponent,
    DialogModule,
    CommonModule,
    TabViewModule,
    FormsModule,
    DropdownModule,
    RouterModule.forChild(routes)
  ]
  ,
  exports: [
    PopupLoginComponent
  ]
})
export class ProfileModule { }
