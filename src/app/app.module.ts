import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { FormsModule ,    ReactiveFormsModule} from '@angular/forms';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { OrderViewComponent } from './components/order-view/order-view.component';
import { ProductNavBarComponent } from './components/product/product-nav-bar/product-nav-bar.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductListItemComponent } from './components/product/product-list/product-list-item/product-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NavBarComponent,
    AboutComponent,
    ProductAddComponent,
    ProductEditComponent,
    OrderViewComponent,
    ProductNavBarComponent,
    ProductListComponent,
    ProductListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
