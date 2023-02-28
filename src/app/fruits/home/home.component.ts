import { Component, OnInit } from '@angular/core';
import {Fruit} from '../fruit'
import { FruitService } from '../fruit.service';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
},


)
export class HomeComponent implements OnInit{
allFruits: Fruit[]=[];
deleteModal: any;
idTodelete: number = 0;
constructor (private fruitService: FruitService){}
  
ngOnInit(): void {
  this.deleteModal = new window.bootstrap.Modal(
    document.getElementById('deleteModal')
  );
    this.get();
    
  }
  get()
  {
    this.fruitService.get().subscribe((data)=>{this.allFruits=data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
    delete() {
      this.fruitService.delete(this.idTodelete).subscribe({
        next: (data) => {
          this.allFruits = this.allFruits.filter(_ => _.id != this.idTodelete)
          this.deleteModal.hide();
        },
      });
    }
  }
