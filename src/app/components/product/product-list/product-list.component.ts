import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionEvent, Product, ProductActionsType } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/service/event.driver.service';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private evenDriverService:EventDriverService) { }

  ngOnInit(): void {
  }
  @Input()inputProducts$: Observable<AppDataState<Product[]>> | null = null;


  readonly ProductDataEnum = DataStateEnum;

  onAddProduct(){
    this.evenDriverService.publishEvent({type:ProductActionsType.GET_NEW_PRODUCTS})
  }

}
