import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview/overview.component';
import {TicketRoutingModule} from "./ticket.routing.module";

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    // NgxsModule.forFeature([LogbookState, HsTableState, LocationState, ShiftBookState]),
    TicketRoutingModule
  ],
  exports: [OverviewComponent],
})
export class TicketModule {}
