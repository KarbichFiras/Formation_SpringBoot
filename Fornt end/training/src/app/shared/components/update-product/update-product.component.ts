import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { ProductService } from 'src/app/core/services/api/product.service';
import { SharedProductService } from 'src/app/core/services/shared/sharedProduct.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService:ProductService, private sharedProductService: SharedProductService, private router: Router) { }

  ngOnInit(): void {
    this.getSelectedProduct();
  }

  getSelectedProduct(){
    this.sharedProductService.get_selectedProduct().subscribe(selectedProduct => {

    });
    this.product = this.sharedProductService.getSelectedProduct();
  }

  onSubmit(){
    this.productService.updateProduct(this.product).subscribe(product=>{
      this.router.navigate(['/']);
    })
  }

}
