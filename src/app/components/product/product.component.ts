import { Component,ViewChild, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import{Observable, of} from 'rxjs'
import{startWith,map,catchError} from 'rxjs/operators'
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';
import{NgForm} from '@angular/forms'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service:ProductService, private router:Router) { }

  ngOnInit(): void {
  }
  products$! : Product[] ;
  obs: Observable<AppDataState<Product[]>>|null=null;
  readonly ProductDataEnum=DataStateEnum;
 
  @ViewChild('form')
form:NgForm;
  onGetAllProducts(){
  //  this.obs =  this.service.getAllProducts().pipe(
  //   map((data)=>({dataState:'LOADED', products: data.products})
  //  ));


     this.obs =  this.service.getAllProducts().pipe(
    map((data)=>({dataState:DataStateEnum.LOADED, data: data})),
    startWith({dataState: DataStateEnum.LOADING}),
    catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.errorMessage}))
    
    );

  //  this.obs.subscribe((data)=>{
  //   console.log(data)
  //  })
  }
  onGetSelectedProduct(){
    this.obs =  this.service.getSelectedProducts().pipe(
      map((data)=>({dataState:DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.errorMessage}))
      
      );
  }
  onGetAvailableProducts(){
    this.obs =  this.service.getAvailableProducts().pipe(
      map((data)=>({dataState:DataStateEnum.LOADED, data: data})),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.errorMessage}))
      
      );
  }

  onSearch(){
  console.log(this.form)
  this.obs =  this.service.getSeached(this.form.controls['searched'].value).pipe(
    map((data)=>({dataState:DataStateEnum.LOADED, data: data})),
    startWith({dataState: DataStateEnum.LOADING}),
    catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.errorMessage}))
    
    );
  }

  onSelect(p:Product){
     this.service.changeSelectStatus(p).subscribe((data)=>{
      p.selected=data.selected;
     })
  }

  onDelete(id:number){
    this.service.deleteProduct(id).subscribe((data)=>{
      this.onGetAllProducts();
    })
  }

  onEdit(id:number){
    this.router.navigateByUrl('products/edit/'+id)
  }
  onAddProduct(){
   this.router.navigate(['products/add'])
  }
}

