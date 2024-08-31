import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailComponent } from "./detail.component";
import { GalleriaModule } from 'primeng/galleria';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { BreadcrumComponent } from '../../common/breadcrum/breadcrum.component';
import { CarouselModule } from 'primeng/carousel';
import { PhotoService } from "../../service/details/photoservice";
import { ListingCardComponent } from "../listing/listing-card/listing-card.component";

export const routes: Routes = [
    {
        path: '',
        component: DetailComponent,
    }

];

@NgModule({
    declarations: [
        DetailComponent,
    ],
    imports: [
    GalleriaModule,
    FloatLabelModule,
    CalendarModule,
    BreadcrumComponent,
    FormsModule,
    DialogModule,
    CarouselModule,
    RouterModule.forChild(routes),
    ListingCardComponent
],
    exports: [RouterModule],
    providers:[
        PhotoService
    ]
})
export class DetailRoutes { }