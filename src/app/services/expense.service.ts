import { Injectable, signal } from "@angular/core";
import { DashboardData } from "../models/expense.model";

@Injectable({ providedIn: "root" })
export class ExpenseService {
  private readonly dashboardData = signal<DashboardData>({
    totalBalance: 84500,
    totalIncome: 125000,
    totalExpenses: 40500,
    transactions: [
      {
        id: 1,
        title: "Salary",
        date: "Sep 20, 2026",
        amount: 85000,
        type: "income",
        icon: "💰",
      },
      {
        id: 2,
        title: "Groceries",
        date: "Sep 19, 2026",
        amount: 2450,
        type: "expense",
        icon: "🛒",
      },
      {
        id: 3,
        title: "Freelance Project",
        date: "Sep 17, 2026",
        amount: 40000,
        type: "income",
        icon: "💻",
      },
      {
        id: 4,
        title: "Electricity Bill",
        date: "Sep 15, 2026",
        amount: 1800,
        type: "expense",
        icon: "⚡",
      },
      {
        id: 5,
        title: "Dining Out",
        date: "Sep 13, 2026",
        amount: 1250,
        type: "expense",
        icon: "🍽️",
      },
      {
        id: 6,
        title: "Transport",
        date: "Sep 10, 2026",
        amount: 900,
        type: "expense",
        icon: "🚗",
      },
    ],
  });

  readonly dashboard = this.dashboardData.asReadonly();

  

  addTransaction(transaction: {
    title: string;

    amount: number;

    type: "income" | "expense";

    date: string;

    icon: string;
  }) {
    const currentData = this.dashboardData();

    const newTransaction = {
      id: Date.now(),

      title: transaction.title,

      date: transaction.date,

      amount: transaction.amount,

      type: transaction.type,

      icon: transaction.icon,
    };

    const updatedTransactions = [newTransaction, ...currentData.transactions];

    const updatedIncome =
      transaction.type === "income"
        ? currentData.totalIncome + transaction.amount
        : currentData.totalIncome;

    const updatedExpenses =
      transaction.type === "expense"
        ? currentData.totalExpenses + transaction.amount
        : currentData.totalExpenses;

    const updatedBalance = updatedIncome - updatedExpenses;

    this.dashboardData.set({
      totalBalance: updatedBalance,

      totalIncome: updatedIncome,

      totalExpenses: updatedExpenses,

      transactions: updatedTransactions,
    });
  }

  getDashboardData(): DashboardData {
    return this.dashboardData();
  }
}
