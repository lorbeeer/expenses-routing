import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense/expense.service';
import { CategoryService } from '../category/category.service';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {
  data:number[]=[];
  labels:string[]=[];
  chartType:string='doughnut';

  donutColors = [];
  constructor(private expenseService:ExpenseService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.createDoughnut();
  }
  createDoughnut(){
    const expenses = this.expenseService.getExpenses();
    const categories = this.categoryService.getCategories();
    let colorsArray=[];

    for(let c of categories) { /////////////////////for each category
      this.labels.push(c.name);

      let sum = 0;
      for(let e of expenses) {
        if (e.categoryId == c.id) {
          sum += e.amount;
        }
      }
      this.data.push(sum); ///////////////////get sum

      switch (c.color) {   ////////////////////////////get color
        case 'primary':
          colorsArray.push('#007bff');
          break;
        case 'secondary':
          colorsArray.push('#868e96');
          break;
        case 'success':
          colorsArray.push('#28a745');
          break;
        case 'danger':
          colorsArray.push('#dc3545');
          break;
        case 'warning':
          colorsArray.push('#ffc107');
          break;
        case 'info':
          colorsArray.push('#17a2b8');
          break;
        case 'dark':
          colorsArray.push('#343a40');
      }
      this.donutColors = [{ backgroundColor: colorsArray}];
    }

  }
}
