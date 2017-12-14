import { Expense } from "./expense.model";

export class ExpenseService {
	expenses = [
		new Expense(0, 'buy tickets', 150, 0)
	];
	id = 0;
	setExpenses(){
		localStorage.setItem('expenses', JSON.stringify(this.expenses));
	}
	getExpenses(){
		return JSON.parse(localStorage.getItem('expenses'));
	}
	getExpense(id:number){
		return this.expenses.find(
			ex => {
				return ex.id == id
			}
		);
	}
	addExpense(data:any){
		this.id += 1;
		const item = new Expense(this.id, data.title, data.amount, data.categoryId);
		this.expenses.push(item);
		this.setExpenses();
	}
	editExpense(id:number, data:any){
		const item = new Expense(id, data.title, data.amount, data.categoryId);
		const index = this.expenses.findIndex(
			ex => ex.id == id
		);
		this.expenses.splice(index, 1, item);
		this.setExpenses();
	}
}