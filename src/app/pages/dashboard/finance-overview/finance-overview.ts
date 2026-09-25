import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../../services/expense.service';
import { CurrencyPipe } from '@angular/common';
import { Transaction } from '../../../models/expense.model';

@Component({
  selector: 'app-finance-overview',
  imports: [CurrencyPipe],
  standalone:true,
  templateUrl: './finance-overview.html',
  styleUrl: './finance-overview.css',
})
export class FinanceOverview {
  private expenseService=inject(ExpenseService);

  data=this.expenseService.getDashboardData();

  get expenses(): Transaction[] {
    return this.data.transactions.filter(transaction => transaction.type === 'expense');
  }

  get income(): Transaction[] {
    return this.data.transactions.filter(transaction => transaction.type === 'income');
  }
}
