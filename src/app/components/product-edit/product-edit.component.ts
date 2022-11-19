import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number;
  editForm: FormGroup;



  ngOnInit(): void {
    this.service.getProduct(this.id).subscribe((product) => {
      this.editForm = this.fb.group({
        id:product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        selected: product.selected,
        available: product.available
      })
    }, (err) => { console.log('err.errorMessage') })

  }

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder, private service: ProductService) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }


  onSubmit() {
    this.service.updateProduct(this.editForm.value).subscribe((data) => {
      alert('Produkt aktualisiert')
    })
  }
}
