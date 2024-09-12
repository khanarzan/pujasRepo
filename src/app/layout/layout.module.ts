import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ListingComponent } from '../modules/listing/listing.component';
import { DetailComponent } from '../modules/detail/detail.component';
import { CheckoutComponent } from '../modules/checkout/checkout.component';
import { FooterComponent } from "./footer/footer.component";
import { DialogModule } from 'primeng/dialog';
import { ProfileModule } from '../modules/profile/profile.module';
import { FormsModule } from '@angular/forms';
import { FullPageLoginComponent } from '../modules/profile/full-page-login/full-page-login.component';

const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../modules/home/home.module').then(m => m.homeRoutes )
            },
            {
                path: 'listing',
                loadChildren: () => import('../modules/listing/listing.module').then(m => m.ListingRoutes )
            },
            {
                path: 'detail',
                loadChildren: () => import('../modules/detail/detail.module').then(m => m.DetailRoutes )
            },
            {
                path: 'checkout',
                component: CheckoutComponent
            },
            {
                path: 'login',
                component: FullPageLoginComponent
            },

           
        ],
    },
    
];

@NgModule({
    declarations: [BaseComponent,
        HeaderComponent],
    imports: [
        CommonModule, 
        DialogModule, 
        MenuModule, 
        ProfileModule,
        FormsModule,
        RouterModule.forChild(routes), FooterComponent],
    exports: [RouterModule]
})
export class LayoutRoutes { }