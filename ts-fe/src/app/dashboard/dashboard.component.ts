import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  private Chart: any;

  ngOnInit() {}

  async ngAfterViewInit() {
    const { Chart, registerables } = await import('chart.js');
    Chart.register(...registerables);
    this.Chart = Chart;

    setTimeout(() => {
      this.createSalesChart();
      this.createRevenueChart();
      this.createUserChart();
    });
  }

  createSalesChart() {
    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Monthly Sales',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        fill: true,
        tension: 0.4
      }]
    };

    new this.Chart('salesChart', {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createRevenueChart() {
    const data = {
      labels: ['Products', 'Services', 'Subscriptions', 'Other'],
      datasets: [{
        data: [30, 25, 35, 10],
        backgroundColor: [
          '#4CAF50',  // green
          '#2196F3',  // blue
          '#FFC107',  // amber
          '#9C27B0'   // purple
        ]
      }]
    };

    new this.Chart('revenueChart', {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    });
  }

  createUserChart() {
    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Active Users',
        data: [120, 150, 180, 160, 200, 180, 190],
        backgroundColor: '#2196F3'
      }]
    };

    new this.Chart('userChart', {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
