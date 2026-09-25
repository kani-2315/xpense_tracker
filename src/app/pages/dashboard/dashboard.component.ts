import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { Sidebar } from './sidebar/sidebar';
import { DashboardContent } from './dashboard-content/dashboard-content';
import { FinanceOverview } from './finance-overview/finance-overview';
import { DashboardGrid } from './dashboard-grid/dashboard-grid';
import { TransactionForm } from './sidebar/transaction-form/transaction-form';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Sidebar, DashboardContent, FinanceOverview, DashboardGrid, TransactionForm],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  showTransactionForm:boolean =false;
  private readonly expenseService = inject(ExpenseService);
  private readonly router = inject(Router);

  readonly data = this.expenseService.getDashboardData();  

  openTransactionForm(){
    this.showTransactionForm=true;
  }
}