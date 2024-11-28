import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'status', 'priority', 'actions'];
  tickets = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private router: Router) { }

  ngOnInit() {
    // Replace this with your actual API call
    this.tickets.data = [
      { id: 1, title: 'Bug in login', status: 'OPEN', priority: 'HIGH' },
      { id: 2, title: 'Update documentation', status: 'IN_PROGRESS', priority: 'MEDIUM' },
      // Add more sample data as needed
    ];
  }

  ngAfterViewInit() {
    if (this.paginator) {
    this.tickets.paginator = this.paginator;
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'OPEN': return 'warn';
      case 'IN_PROGRESS': return 'accent';
      case 'CLOSED': return 'primary';
      default: return '';
    }
  }

  editTicket(ticket: any) {
    this.router.navigate(['/tickets/edit', ticket.id]);
  }
}
