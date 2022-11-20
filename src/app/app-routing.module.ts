import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminTemplateComponent } from './components/admin-template/admin-template.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderViewComponent } from './components/order-view/order-view.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductComponent } from './components/product/product.component';
import { AuthentificationGuard } from './guards/authentification.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'admin',component:AdminTemplateComponent, canActivate:[AuthentificationGuard], children:[
    {path:'products', component:ProductComponent},
    {path:'products/edit/:id', component:ProductEditComponent},
  ]},
  {path:'about',component:AboutComponent},
  {path:'products/add', component: ProductAddComponent},
  {path: 'order/:id/:id2',component:OrderViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
