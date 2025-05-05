import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewComponent } from './overview/overview.component';
import {TicketRoutingModule} from "./ticket.routing.module";
import {MatCard, MatCardHeader, MatCardModule} from '@angular/material/card';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatPaginator} from '@angular/material/paginator';
import {MatChip} from '@angular/material/chips';

@NgModule({
  declarations: [
    OverviewComponent
  ],
  imports: [
    CommonModule,
    // NgxsModule.forFeature([LogbookState, HsTableState, LocationState, ShiftBookState]),
    TicketRoutingModule,
    MatCard,
    MatCardHeader,
    MatCardModule,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatIconButton,
    MatIcon,
    MatPaginator,
    MatChip,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef
  ],
  exports: [OverviewComponent],
})
export class TicketModule {}
