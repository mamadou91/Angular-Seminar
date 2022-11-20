import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userFormGroup: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder,private loginService:LoginService, private router: Router) {
    this.userFormGroup = this.fb.group({
      username: '',
      password: ''
    })
  }

  ngOnInit(): void {
  }
  handleLogin(){
    let username= this.userFormGroup.value.username;
    let password= this.userFormGroup.value.password;

    this.loginService.login(username,password).subscribe((user)=>{

      this.loginService.authenticateUser(user).subscribe((authUser)=>{

          this.router.navigateByUrl('/admin')
      })
    },
    (err)=>{ this.errorMessage=err}
    )
  }
}
