import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route:Router) { }

 
  ngOnInit(): void {
  }

  onClickAbout(){
// this.route.navigate(['about']);
 this.route.navigateByUrl('/about')
   }
}
