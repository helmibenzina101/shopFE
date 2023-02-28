import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Fruit } from './fruit';
@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http: HttpClient) { }
  get() {
    return this.http.get<Fruit[]>('http://localhost:8080/Fruit');
  }
  create(payload: Fruit) {
    return this.http.post<Fruit>('http://localhost:8080/Fruit', payload);
  }
  getById(id: number) {
    return this.http.get<Fruit>(`http://localhost:8080/Fruit/${id}`);
   }
    
   update(payload:Fruit){
    return this.http.put(`http://localhost:8080/Fruit`,payload);
   }
   delete(id:number){
    return this.http.delete<Fruit>(`http://localhost:8080/Fruit/${id}`);
 }
   
}


