import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8080/consultAllProducts");
  }

  addProduct(product: Product):Observable<Product>{
    return this.http.post<Product>("http://localhost:8080/addProduct", product);
  }

  updateProduct(product: Product):Observable<Product>{
    return this.http.put<Product>("http://localhost:8080/updateProduct", product);
  }

  deleteProduct(productId: number){
    let p = new HttpParams();
    return this.http.delete("http://localhost:8080/deleteProduct?productId=" + productId);
  }

}
