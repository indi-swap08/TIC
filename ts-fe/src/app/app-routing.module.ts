import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OverviewComponent } from './ticket/overview/overview.component';
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
    path: AppRoutes.ticket,
    loadChildren: () => import('./ticket/ticket.module').then((m) => m.TicketModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
