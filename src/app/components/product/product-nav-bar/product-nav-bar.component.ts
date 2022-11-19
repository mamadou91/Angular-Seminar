
import { Component, ViewChild,Output, OnInit, EventEmitter } from '@angular/core';
import{NgForm} from '@angular/forms'
import { ActionEvent, ProductActionsType } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('form') form:NgForm;
  @Output() eventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  onGetAllProducts(){
    this.eventEmitter.emit({type:ProductActionsType.GET_ALL_PRODUCTS});
  }
  onGetSelectedProduct(){
    this.eventEmitter.emit({type:ProductActionsType.GET_SELECTED_PRODUCTS});
  }
  onGetAvailableProducts(){
    this.eventEmitter.emit({type:ProductActionsType.GET_AVAILABLE_PRODUCTS});
  }

  onSearch(){
    this.eventEmitter.emit({type:ProductActionsType.GET_SEARCHED_PRODUCTS, payload:this.form.value.searched});
  }
}
