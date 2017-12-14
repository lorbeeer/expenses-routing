import { Component, OnInit, Input } from '@angular/core';
import { Expense } from './expense.model';
import { Category } from '../category/category.model';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  category:Category;
  @Input() expense:Expense;
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.category = this.categoryService.getCategory(this.expense.categoryId);
  }

}
