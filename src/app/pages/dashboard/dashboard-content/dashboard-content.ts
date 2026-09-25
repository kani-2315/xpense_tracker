import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../../services/expense.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './dashboard-content.html',
  styleUrl: './dashboard-content.css',
})
export class DashboardContent {
  private expenseService=inject(ExpenseService);

  data = this.expenseService.getDashboardData();
}