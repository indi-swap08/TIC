import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
    this.createDailySalesChart();
    this.createSubscriptionsChart();
    this.createTasksChart();
  }

  createDailySalesChart() {
    const ctx = document.getElementById('dailySalesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 15],
          borderColor: '#4caf50',
          tension: 0.4,
          fill: true,
          backgroundColor: 'rgba(76, 175, 80, 0.1)'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  createSubscriptionsChart() {
    const ctx = document.getElementById('websiteViewsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J'],
        datasets: [{
          label: 'Subscriptions',
          data: [542, 443, 320, 780, 553, 453],
          backgroundColor: '#ff9800'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  createTasksChart() {
    const ctx = document.getElementById('completedTasksChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{
          label: 'Tasks',
          data: [50, 40, 300, 220, 500, 250, 400],
          borderColor: '#f44336',
          tension: 0.4,
          fill: true,
          backgroundColor: 'rgba(244, 67, 54, 0.1)'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
}
