import { Component,Input, ViewChild, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ActionEvent, Product, ProductActionsType } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { Observable, of } from 'rxjs'
import { startWith, map, catchError } from 'rxjs/operators'
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  obs: Observable<AppDataState<Product[]>> | null = null;
  readonly ProductDataEnum = DataStateEnum;


  onGetAllProducts() {
    //  this.obs =  this.service.getAllProducts().pipe(
    //   map((data)=>({dataState:'LOADED', products: data.products})
    //  ));


    this.obs = this.service.getAllProducts().pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.errorMessage }))

    );

    //  this.obs.subscribe((data)=>{
    //   console.log(data)
    //  })
  }
  onGetSelectedProduct() {
    this.obs = this.service.getSelectedProducts().pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.errorMessage }))

    );
  }
  onGetAvailableProducts() {
    this.obs = this.service.getAvailableProducts().pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.errorMessage }))

    );
  }

  onSearch(keyword: any) {

    this.obs = this.service.getSeached(keyword).pipe(
      map((data) => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.errorMessage }))

    );
  }

  onSelect(p: Product) {
    this.service.changeSelectStatus(p).subscribe((data) => {
      p.selected = data.selected;
    })
  }

  onDelete(id: number) {
    this.service.deleteProduct(id).subscribe((data) => {
      this.onGetAllProducts();
    })
  }

  onEdit(id: number) {
    console.log(this)
    console.log('3')
    this.router.navigateByUrl('products/edit/' + id)
  }
  onAddProduct() {
    this.router.navigate(['products/add'])
  }

  onActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case ProductActionsType.GET_ALL_PRODUCTS:
        this.onGetAllProducts();
        break;
      case ProductActionsType.GET_SELECTED_PRODUCTS:
        this.onGetSelectedProduct();
        break;
      case ProductActionsType.GET_AVAILABLE_PRODUCTS:
        this.onGetAvailableProducts();
        break;

      case ProductActionsType.GET_SEARCHED_PRODUCTS:
        this.onSearch($event.payload);
        break;
      case ProductActionsType.GET_NEW_PRODUCTS:
        this.onAddProduct();
        break;
    case ProductActionsType.EDIT_PRODUCT:
          this.onEdit($event.payload);
          break;
      case ProductActionsType.SELECT_PRODUCT:
        this.onSelect($event.payload);
        break;
    case ProductActionsType.DELETE_PRODUCT:
          this.onDelete($event.payload);
          break;
    }
  }
}

