import { Component, OnInit, EventEmitter, Input , Output} from '@angular/core';
import { ActionEvent, Product, ProductActionsType } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/service/event.driver.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  constructor(private eventDriverService: EventDriverService, public loginService: LoginService) { }
  
  // @Output() productItemEmitter:EventEmitter<ActionEvent>= new EventEmitter();
  @Input()product!:Product;

  ngOnInit(): void {
  }
  onSelect(p:Product){
    this.eventDriverService.publishEvent({type:ProductActionsType.SELECT_PRODUCT, payload:p})
  }
  onDelete(id:number){
    console.log('Delete Button clicked! ID : '+id)
    this.eventDriverService.publishEvent({type:ProductActionsType.DELETE_PRODUCT,payload:id})
  }
  onEdit(id:number){
    this.eventDriverService.publishEvent({type:ProductActionsType.EDIT_PRODUCT, payload:id})
  }
}
