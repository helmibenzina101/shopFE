import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/categories/category';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
declare var window: any;
import { CategoryService } from 'src/app/categories/category.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
allcategories: Category[]=[];
[x: string]: any;
  fruitForm: Fruit = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    category: {id:0, name:''}
  };

  constructor(private fruitService:FruitService,
    private router:Router, private categoryservice:CategoryService) {}
 
  ngOnInit(): void {
    this.get();
  }
  get()
  {
    this.categoryservice.get().subscribe((data)=>{this.allcategories=data;
    });
  }
 
  create(): void{
    this.fruitService.create(this.fruitForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/fruits/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}