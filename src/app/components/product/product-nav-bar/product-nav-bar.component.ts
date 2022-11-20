
import { Component, ViewChild,Output, OnInit, EventEmitter } from '@angular/core';
import{NgForm} from '@angular/forms'
import { ActionEvent, ProductActionsType } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/service/event.driver.service';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
  }
  @ViewChild('form') form!:NgForm;
 

  onGetAllProducts(){
    this.eventDriverService.publishEvent({type:ProductActionsType.GET_ALL_PRODUCTS})
  }
  onGetSelectedProduct(){
    this.eventDriverService.publishEvent({type:ProductActionsType.GET_SELECTED_PRODUCTS})
  }
  onGetAvailableProducts(){
    this.eventDriverService.publishEvent({type:ProductActionsType.GET_AVAILABLE_PRODUCTS})
  }

  onSearch(){
    this.eventDriverService.publishEvent({type:ProductActionsType.GET_SEARCHED_PRODUCTS, payload:this.form.value.searched})
  }
}
