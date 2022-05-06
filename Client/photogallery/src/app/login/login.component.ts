import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';
  loginStatus = true;

  constructor(
            private cs: CommonService,
            private router: Router
          ) { }

  login(){
    this.cs.loginService(this.email, this.password).subscribe( loginData => {
      console.log(loginData, loginData.login);
      this.loginStatus = loginData.login;
      if(loginData.login){
        //Navigate method takes an array. The first element is the path and the rest
        //are parameters
        this.router.navigate(['/photos']);
      }
    })
  }

  ngOnInit(): void {
  }

}
