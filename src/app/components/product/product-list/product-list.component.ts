import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionEvent, Product, ProductActionsType } from 'src/app/model/product.model';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()inputProducts$: Observable<AppDataState<Product[]>> | null = null;
  @Output() productEmitter: EventEmitter<ActionEvent>=new EventEmitter();

  readonly ProductDataEnum = DataStateEnum;

  onSelect(p:Product){
    this.productEmitter.emit({type:ProductActionsType.SELECT_PRODUCT, payload:p})
  }
  onDelete(id:number){
    this.productEmitter.emit({type:ProductActionsType.DELETE_PRODUCT,payload:id})
  }
  onEdit(id:number){
    console.log(this)
    console.log('2')
    this.productEmitter.emit({type:ProductActionsType.EDIT_PRODUCT, payload:id})
  }
  onAddProduct(){
    this.productEmitter.emit({type:ProductActionsType.GET_NEW_PRODUCTS})
  }

  OnActionEvent($event){
    console.log(this)
    console.log('2')
    this.productEmitter.emit($event);
  }
}
