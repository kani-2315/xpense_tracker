export interface Transaction {
  id: number;
  title: string;
  date: string;
  amount: number;
  type: 'income' | 'expense';
  icon: string;
}

export interface DashboardData {
  totalBalance: number;
  totalIncome: number;
  totalExpenses: number;
  transactions: Transaction[];
}