import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../../services/expense.service';

@Component({
  selector: 'app-dashboard-grid',
  imports: [CurrencyPipe],
  standalone:true,
  templateUrl: './dashboard-grid.html',
  styleUrl: './dashboard-grid.css',
})
export class DashboardGrid {
  private expenseService=inject(ExpenseService);

  data=this.expenseService.getDashboardData();
}
