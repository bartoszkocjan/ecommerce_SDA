import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './shared/components/cart/cart.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';

const routes: Routes = [
  {path: 'home', 
  component: HomeComponent},

  {path: 'products', 
  component: ProductsComponent},

  {path: 'cart', 
  component: CartComponent},
  
  {path: '', 
  redirectTo: '/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
