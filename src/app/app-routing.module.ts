import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { OrderViewComponent } from './components/order-view/order-view.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'products', component:ProductComponent},
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'products/add', component: ProductAddComponent},
  {path:'products/edit/:id', component:ProductEditComponent},
  {path: 'order/:id/:id2',component:OrderViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
