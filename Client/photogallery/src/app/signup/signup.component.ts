import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email:string = '';
  password:string = '';
  confirmpassword:string = '';
  name:string = '';
  country:string = '';
  signupStatus:boolean = false;
  signupmessage:any = '';

  // cs is common service
  constructor(private cs : CommonService,private router:Router) { }

  signup(email:any){
    // this.cs.signupService(this.email, this.password,this.confirmpassword,this.name,this.country).subscribe(signupData => {
    //   console.log(signupData, signupData.signup);
    //   this.signupStatus = signupData.signup;
    //   this.signupStatus = signupData.newuser;
    //   this.signupmessage = signupData.message;
      //console.log(signupdata.message.sqlMessage);

      // if(signupData.signup){

      //   this.router.navigate(['/login']);
      // }
    // })
  }

  ngOnInit(): void {
  }

}
