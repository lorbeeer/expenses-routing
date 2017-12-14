import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { CategoryComponent } from './category/category.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseService } from './expense/expense.service';
import { CategoryService } from './category/category.service';
import { CategoriesComponent } from './categories/categories.component';
import { DoughnutComponent } from './doughnut/doughnut.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    ExpenseListComponent,
    CategoryComponent,
    ExpenseFormComponent,
    CategoriesComponent,
    DoughnutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [
    ExpenseService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
