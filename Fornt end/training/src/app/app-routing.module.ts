import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './shared/components/add-product/add-product.component';
import { ConultAllProductsComponent } from './shared/components/conult-all-products/conult-all-products.component';
import { UpdateProductComponent } from './shared/components/update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    component : ConultAllProductsComponent
  },
  {
    path: 'AddProduct',
    component : AddProductComponent
  },
  {
    path: 'UpdateProduct',
    component : UpdateProductComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
