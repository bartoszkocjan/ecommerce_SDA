import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';

const routes: Routes = [
  {path: 'home', 
  component: HomeComponent},

  {path: 'products', 
  component: ProductsComponent},
  
  {path: '', 
  redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
