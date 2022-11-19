import { Component, OnInit, EventEmitter, Input , Output} from '@angular/core';
import { ActionEvent, Product, ProductActionsType } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  constructor() { }
  
  @Output() productItemEmitter:EventEmitter<ActionEvent>= new EventEmitter();
  @Input()product:Product;

  ngOnInit(): void {
  }
  onSelect(p:Product){
    this.productItemEmitter.emit({type:ProductActionsType.SELECT_PRODUCT, payload:p})
  }
  onDelete(id:number){
    this.productItemEmitter.emit({type:ProductActionsType.DELETE_PRODUCT,payload:id})
  }
  onEdit(id:number){
    console.log(this)
    console.log('1')
    this.productItemEmitter.emit({type:ProductActionsType.EDIT_PRODUCT, payload:id})
  }
}
