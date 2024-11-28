import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { AppRoutes } from './app-routing.constants';
import {CreateEditTicketComponent} from "./create-edit-ticket/create-edit-ticket.component";

const routes: Routes = [
  {
    path: AppRoutes.root,
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: AppRoutes.dashboard,
    component: DashboardComponent
  },
  {
    path: AppRoutes.ticketList,
    component: TicketListComponent
  },
  {
    path: AppRoutes.createTicket,
    component: CreateEditTicketComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
