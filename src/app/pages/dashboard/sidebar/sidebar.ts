import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  standalone:true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Output() addTransaction = new EventEmitter<void>();

  openTransactionForm(){
    this.addTransaction.emit();
  }
}
