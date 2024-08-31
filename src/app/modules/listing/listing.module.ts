import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListingComponent } from "./listing.component";

export const routes: Routes = [
    {
        path: '',
        component: ListingComponent,
    }

];

@NgModule({
    declarations: [
    ],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListingRoutes { }