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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    NavBarComponent,
    AboutComponent,
    ProductAddComponent,
    ProductEditComponent,
    OrderViewComponent
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
