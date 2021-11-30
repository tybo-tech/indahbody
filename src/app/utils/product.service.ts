import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './email.model';

@Injectable({
  providedIn: 'root'
})


export class ProductService {


  private productsBehaviorSubject: BehaviorSubject<Product[]>;
  public productObservable: Observable<Product[]>;

  constructor() {
    this.productsBehaviorSubject = new BehaviorSubject<Product[]>([]);
    this.productObservable = this.productsBehaviorSubject.asObservable();

  }

  public get currentMessagePopValue(): Product[] {
    return this.productsBehaviorSubject.value;
  }
 

  updatProductsState(state: Product[]) {
    if (state) {
      this.productsBehaviorSubject.next(state);
    }
  }

}

