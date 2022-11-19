import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {

  param ='';
  constructor(private aRoute:ActivatedRoute) { 
    aRoute.params.subscribe(val=>{
     this.param= val['id2'];
    })
  }

  ngOnInit(): void {
  }

}
