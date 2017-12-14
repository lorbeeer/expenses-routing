import { Category } from "./category.model";

export class CategoryService {
	id = 4;
	categories = [
		new Category(0, 'travel', 'info', 'fa fa-plane'),
		new Category(1, 'drinks', 'warning', 'fa fa-glass'),
		new Category(2, 'food', 'danger', 'fa fa-cutlery'),
		new Category(3, 'car', 'primary', 'fa fa-car'),
		new Category(4, 'home', 'success', 'fa fa-home')
	];
	setCategories(){
		
		localStorage.setItem('categories', JSON.stringify(this.categories));
	}
	getCategories(){
		return JSON.parse(localStorage.getItem('categories'));
	}
	getCategory(id:number){
		return this.categories.find(
			ctg => {
				return ctg.id == id
			}
		);
	}
	addCategory(data:any){
		this.id +=1;
		const item = new Category(this.id, data.name, data.color, data.logo);
		this.categories.push(item);
		this.setCategories();
	}
	editCategory(id:number, data:any){
		this.id +=1;
		const item = new Category(id, data.name, data.color, data.logo);
		const index = this.categories.findIndex(
			c => c.id == id
		);
		this.categories.splice(index, 1, item);
		this.setCategories();
	}
}
