import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConultAllProductsComponent } from './components/conult-all-products/conult-all-products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ConultAllProductsComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    ConultAllProductsComponent,
    AddProductComponent,
    UpdateProductComponent
  ]
})
export class SharedModule { }
