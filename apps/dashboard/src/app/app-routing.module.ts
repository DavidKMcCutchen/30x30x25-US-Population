import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { PopulationComponent } from './population/population.component';
import { LoginComponent, WildComponent } from "@us-population/ui-login";
import { PopulationSubComponent } from './population-sub/population-sub.component';

const routes: Route[] = [
  {path: '', component: LoginComponent },
  {path: 'wild', component: WildComponent},
  {path: 'api/data?drilldowns=Nation&measures=Population', component: PopulationComponent},
  {path: 'api/data?drilldowns=Nation&measures=Population/:Population', component: PopulationSubComponent },
  {path: 'login', component: LoginComponent },
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }