import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private service: ProductService, private router:Router) { }

  ngOnInit(): void {
  }
 


  onSubmit(form :NgForm){
  let product:{name:string, price:number,quantity:number, available:boolean, selected:boolean}={
    name:  form.controls['groupDetails'].value.name,
           price:form.controls['groupDetails'].value.price,
          quantity: form.controls['quantity'].value,
          available:(form.controls['available'].value =='')?false:true,
          selected : (form.controls['selected'].value =='')?false:true
  }
 
          this.service.addProduct(product).subscribe((data)=>{
        alert('success')
          })
  }
}
