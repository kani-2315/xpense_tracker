import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { Sidebar } from './sidebar/sidebar';
import { DashboardContent } from './dashboard-content/dashboard-content';
import { FinanceOverview } from './finance-overview/finance-overview';
import { DashboardGrid } from './dashboard-grid/dashboard-grid';
import { TransactionFormComponent } from './sidebar/transaction-form/transaction-form';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Sidebar, DashboardContent, FinanceOverview, DashboardGrid, TransactionFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl:"./dashboard.component.css",
})
export class DashboardComponent {
  showTransactionForm:boolean =false;
  private readonly expenseService = inject(ExpenseService);
  private readonly router = inject(Router);

  readonly data = this.expenseService.dashboard;  

  openTransactionForm(){
    this.showTransactionForm=true;
  }

  closeTransactionForm(){
    this.showTransactionForm=false;
  }
}