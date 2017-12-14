import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense/expense.model';
import { Category } from '../category/category.model';
import { ExpenseService } from '../expense/expense.service';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[];
  totalAmount:number;

  constructor(private expenseService:ExpenseService) {}

  ngOnInit() {
    this.expenses = this.expenseService.getExpenses();
    this.setAmount();
  }
  setAmount(){
    this.totalAmount = 0;
    this.expenses.forEach(
      ex => {
        this.totalAmount += ex.amount;
      }
    );
  }
}
