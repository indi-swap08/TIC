import { AfterViewInit, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { TicketDataService } from '../../shared/services/ticket-data.service';
import { TicTicket } from '../../shared/model/ticket.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';

@Component({
  selector: 'ticket-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['select', 'number', 'title', 'assignee', 'status', 'priority', 'createdAt', 'actions'];
  dataSource = new MatTableDataSource<TicTicket>([]);
  selection = new SelectionModel<TicTicket>(true, []);
  private subscription: Subscription = new Subscription();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dataService: TicketDataService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.subscription.add(
      this.dataService.getTickets().subscribe(tickets => {
        this.dataSource.data = tickets;
      })
    );

    // Custom filtering for nested objects if needed
    this.dataSource.filterPredicate = (data: TicTicket, filter: string) => {
      const searchStr = (data.number + data.title + data.user.firstName + (data.assignee?.firstName || '')).toLowerCase();
      return searchStr.indexOf(filter.toLowerCase()) !== -1;
    };
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  openCreateTicketModal() {
    const dialogRef = this.dialog.open(CreateTicketComponent, {
      width: '800px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('New Ticket Data:', result);
      }
    });
  }

  getStatusClass(status: string): string {
    return status.toLowerCase().replace('_', '-');
  }

  getPriorityClass(priority: string): string {
    return priority.toLowerCase();
  }
}
