import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'ticket-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'status', 'priority', 'actions'];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  // @ViewChild(MatTable) table!: MatTable<Ticket>;

  dataSource = new MatTableDataSource<any>([]);

  constructor(private router: Router) { }

  ngOnInit() {
    // Replace this with your actual API call
    this.dataSource.data = [
      { id: 1, title: 'Bug in login', status: 'OPEN', priority: 'HIGH' },
      { id: 2, title: 'Update documentation', status: 'IN_PROGRESS', priority: 'MEDIUM' },
      // Add more sample data as needed
    ];
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      // this.table.dataSource = this.dataSource;
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
