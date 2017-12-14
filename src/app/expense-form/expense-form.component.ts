import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../category/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../expense/expense.service';
import { CategoryService } from '../category/category.service';


@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  categories:Category[];
  expenseForm:FormGroup;
  editId = -1;
  get titlePage(){return this.editId >-1 ? 'Edit Expense' : 'Create Expense';}
 
  constructor(private route:ActivatedRoute,
              private router: Router,
              private expenseService:ExpenseService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
    this.formInit();
  }
   
  private formInit(){
    let title='';
    let amount:number;
    let categoryId:number;

    if (this.route.snapshot.params['id']) {
      this.editId = this.route.snapshot.params['id'];
      const expense = this.expenseService.getExpense(this.route.snapshot.params['id']);
      title = expense.title;
      amount = expense.amount;
      categoryId = expense.categoryId;
    }
    this.expenseForm = new FormGroup ({
      'title': new FormControl(title, Validators.required),
      'amount': new FormControl(amount, Validators.required),
      'categoryId': new FormControl(categoryId, Validators.required)
    });
  }
  onSubmit(){
    if (this.editId > -1) {
      this.expenseService.editExpense(this.editId, this.expenseForm.value);
    }else{
      this.expenseService.addExpense(this.expenseForm.value);
    }
    this.router.navigate(['/expenses']);
  }
  onCancel(){
    this.router.navigate(['/expenses']);
  }
}
