import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
interface Login{
  login: boolean;
  message: string;
}

interface signup{
  signup:boolean;
  message:string;
}
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  [x: string]: any;
  private loginURL = "http://localhost:4400/login";
  private signupURL = "http://localhost:4400/signup";

  constructor(private http:HttpClient) { }

  loginService(email:string, password:string){
    let loginBody = {
      email: email,
      password: password
    }
    return this.http.post<Login>(this.loginURL, loginBody);
  }



  signupService(email:string, password:string,confirmpassword:string,name:string,country:string){
    let signupBody = {
      email: email,
      password: password,
      confirmpassword: confirmpassword,
      name:name,
      country: country
    }
    return this.http.post<signup>(this.signupURL, signupBody);

}

}


