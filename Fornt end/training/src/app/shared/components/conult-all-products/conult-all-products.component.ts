import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/api/product.service';
import { SharedProductService } from 'src/app/core/services/shared/sharedProduct.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-conult-all-products',
  templateUrl: './conult-all-products.component.html',
  styleUrls: ['./conult-all-products.component.css']
})
export class ConultAllProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private sharedProductService: SharedProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = products
      // console.log(products)
    });
  }

  updateProduct(productIndex: number) {
    this.sharedProductService.set_selectedProduct(this.products[productIndex]);
    this.router.navigate(['/UpdateProduct']);
  }

  deleteProduct(productId: number) {
    if (confirm("Do you want to delete this product ID° " + productId + " ?")) {
      this.productService.deleteProduct(productId).subscribe(response => {
        this.getProducts();
      });
    }
  }

}
