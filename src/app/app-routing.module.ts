import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { DoughnutComponent } from './doughnut/doughnut.component';

const appRoutes:Routes = [
  {path:'', redirectTo: 'expenses', pathMatch: 'full'},
  {path:'expenses', component: ExpenseListComponent},
  {path:'expense/:id', component: ExpenseFormComponent},
  {path:'create/expense', component: ExpenseFormComponent},
  {path:'categories', component: CategoriesComponent},
  {path:'category/:id', component: CategoryComponent},
  {path:'create/category', component: CategoryComponent},
  {path:'doughnut', component: DoughnutComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
