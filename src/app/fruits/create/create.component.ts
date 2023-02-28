import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  fruitForm: Fruit = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    category: {id:0, name:''}
  };
 
  constructor(private fruitService:FruitService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
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