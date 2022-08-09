import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class SharedProductService {

  private selectedProduct = new Product();
  private _selectedProduct = new Subject<Product>();
  selectedProduct$ = this._selectedProduct.asObservable();

  constructor() { }

  getSelectedProduct(){
    return this.selectedProduct;
  }

  get_selectedProduct(): Observable<Product>{
    return this._selectedProduct;
  }

  set_selectedProduct(product: Product){
    this._selectedProduct.next(product)
    this.selectedProduct = product;
  }

}
