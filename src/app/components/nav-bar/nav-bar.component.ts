import { Component, OnInit, Input } from '@angular/core';
import {Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private route:Router, public logService: LoginService) { }

  ngOnInit(): void {
  }


  onClickAbout(){
// this.route.navigate(['about']);
 this.route.navigateByUrl('/about')
   }

   handleLogout(){
    this.logService.logout().subscribe((val)=>{
      this.route.navigateByUrl('/login')
    })
   }
}
