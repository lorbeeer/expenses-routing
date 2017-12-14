import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CategoryService } from './category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  ctgForm:FormGroup;
  ctgId = -1;
  constructor(private route:ActivatedRoute,
              private categoryService:CategoryService,
              private router:Router
            ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.initForm();
  }

  initForm(){
    let name='';
    let color='secondary';
    let logo='fa fa-question';
    if (this.route.snapshot.params['id']) {
      this.ctgId = this.route.snapshot.params['id'];
      const category = this.categoryService.getCategory(this.ctgId);
      name = category.name;
      color = category.color;
      logo = category.logo;
    }
    this.ctgForm = new FormGroup({
      'name': new FormControl(name, [Validators.required, , Validators.maxLength(6)]),
      'color': new FormControl(color, Validators.required),
      'logo': new FormControl(logo, Validators.required),
    });
  }
  onSubmit(){
    if(this.ctgId > -1) {
      this.categoryService.editCategory(this.ctgId, this.ctgForm.value);
    }else{
      this.categoryService.addCategory(this.ctgForm.value);
    }
    this.router.navigate(['/categories']);
  }
  onCancel(){
    this.router.navigate(['/categories']);
  }
}
