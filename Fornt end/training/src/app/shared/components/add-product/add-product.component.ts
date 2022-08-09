import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/api/product.service';
import { SharedProductService } from 'src/app/core/services/shared/sharedProduct.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService:ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.productService.addProduct(this.product).subscribe(product=>{
      console.log(product)
    })
    this.router.navigate(['/']);
  }

}
