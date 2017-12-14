import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './expense/expense.service';
import { CategoryService } from './category/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private expenseService:ExpenseService,
              private categoryService:CategoryService){}
  ngOnInit(){
    this.expenseService.setExpenses();
    this.categoryService.setCategories();
  }
}
