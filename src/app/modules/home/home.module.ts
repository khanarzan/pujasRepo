import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }

];

@NgModule({
    declarations: [
        
    ],
    imports: [RouterModule.forChild(routes),],
    exports: [RouterModule]
})
export class homeRoutes { }