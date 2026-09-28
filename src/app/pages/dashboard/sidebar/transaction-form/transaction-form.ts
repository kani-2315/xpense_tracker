import { Component, EventEmitter, Output, inject } from "@angular/core";

import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { ExpenseService } from "../../../../services/expense.service";

@Component({
  selector: "app-transaction-form",
  standalone: true,

  imports: [ReactiveFormsModule],

  templateUrl: "./transaction-form.html",
  styleUrl: "./transaction-form.css",
})
export class TransactionFormComponent {
  private readonly fb = inject(FormBuilder);

  private expenseService = inject(ExpenseService);

  @Output()
  close = new EventEmitter<void>();

  transactionForm = this.fb.nonNullable.group({
    title: ["", Validators.required],

    date: ["", Validators.required],

    amount: [0, [Validators.required, Validators.min(1)]],

    type: ["expense" as "income" | "expense", Validators.required],

    icon: ["💰", Validators.required],
  });

  closeForm(): void {
    this.close.emit();
  }

  submit(): void {

  if (this.transactionForm.invalid) {
    this.transactionForm.markAllAsTouched();
    return;
  }

  const formValue = this.transactionForm.getRawValue();

  console.log('BEFORE:', this.expenseService.getDashboardData());

  this.expenseService.addTransaction({
    title: formValue.title,
    date: formValue.date,
    amount: formValue.amount,
    type: formValue.type,
    icon: formValue.icon,
  });

  console.log('AFTER:', this.expenseService.getDashboardData());

  this.closeForm();
}

  showEmojiPicker = false;

  emojis = [
    "💰",
    "💵",
    "💳",
    "🛒",
    "🍔",
    "🍕",
    "☕",
    "🚗",
    "⛽",
    "🏠",
    "💡",
    "📱",
    "💻",
    "🎮",
    "🎬",
    "✈️",
    "🏥",
    "💊",
    "🎓",
    "📚",
    "👕",
    "👟",
    "🎁",
    "🛍️",
    "🏋️",
    "⚽",
    "🎵",
    "🐶",
    "🐱",
    "❤️",
  ];

  selectEmoji(emoji: string) {
    this.transactionForm.patchValue({
      icon: emoji,
    });

    this.showEmojiPicker = false;
  }
}
