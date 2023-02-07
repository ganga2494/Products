import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
import { ViewcatComponent } from './viewcat/viewcat.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {
    path: '', component: NavComponent,
    children: [
      { path: 'product', component: ViewproductsComponent },
  { path: 'cat', component: ViewcatComponent },
  { path: 'addp', component: ProductsComponent },
  { path: 'addc', component: CategoriesComponent },
  { path: 'home', component: HomeComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
