import { Category } from "../categories/category";

export interface Fruit {
    id:number ; 
    name: string ; 
    quantity:number ;
    price: number; 
    category: Category;
}
