import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import {ticketRoutes} from "./ticket.route-constants";

const routes: Routes = [
  {
    path: ticketRoutes.root,
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: ticketRoutes.overview,
    component: OverviewComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketRoutingModule {}
