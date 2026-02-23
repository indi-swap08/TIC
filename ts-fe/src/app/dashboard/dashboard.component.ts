import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { TicketDataService, TicketStats } from '../shared/services/ticket-data.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateTicketComponent } from '../ticket/create-ticket/create-ticket.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  stats: TicketStats | null = null;
  private subscription: Subscription = new Subscription();
  private Chart: any;

  constructor(
    private dataService: TicketDataService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.subscription.add(
      this.dataService.stats$.subscribe(stats => {
        this.stats = stats;
      })
    );
  }

  async ngAfterViewInit() {
    const { Chart, registerables } = await import('chart.js');
    Chart.register(...registerables);
    this.Chart = Chart;

    setTimeout(() => {
      this.createActivityChart();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openCreateTicketModal() {
    const dialogRef = this.dialog.open(CreateTicketComponent, {
      width: '800px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('New Ticket Data:', result);
        // Here you would typically call the data service to save the ticket
      }
    });
  }

  private createActivityChart() {
    const ctx = document.getElementById('userChart') as HTMLCanvasElement;
    if (!ctx) return;

    new this.Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Tickets',
          data: [12, 19, 15, 25, 22, 10, 8],
          borderColor: '#0066FF',
          backgroundColor: 'rgba(0, 102, 255, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, grid: { color: '#f1f5f9' } },
          x: { grid: { display: false } }
        }
      }
    });
  }
}
