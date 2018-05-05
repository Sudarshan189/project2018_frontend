import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";

import {Signup, StatusRespons} from "../shared/classes/signup";
import {HttpclientService} from "./httpclient.service";


@Injectable()
export class AuthService {

  value;
  constructor(private _http: Http) { }

  signup_link = 'http://localhost:8080/newuser';
  login_link = 'http://localhost:8080/login';
  getuser_link = 'http://localhost:8080/user/';

  // headers = new Headers({ 'Content-Type': 'application/json' })
  // options = new RequestOptions({ 'headers': this.headers });

  SignUpService(data: any): Promise<any> {
    // TODO: console.log(data)
    return this._http.post(this.signup_link, data)
      .toPromise()
      .then(this.ProcessSignUp)
      .catch(this.Handler);
  }

  LoginService(data: any): Promise<any> {
    // TODO:console.log(data)
    return this._http.put(this.login_link, data)
      .toPromise()
      .then(this.ProcessSignUp)
      .catch(this.Handler);
  }

  GetUserdataService(): Promise<any> {
    // TODO:console.log(data)
    this.value = localStorage.getItem("id");
    return this._http.get(this.getuser_link+this.value)
      .toPromise()
      .then(this.ProcessUserdata)
      .catch(this.Handler);
  }

  private ProcessSignUp(res) {
    const body = res.json();
    const data = new StatusRespons(body);
    return data;

  }

  private ProcessLogin(res) {
    const body = res.json();
    const data = new StatusRespons(body);
    return data;

  }

  private ProcessUserdata(res) {
    const body = res.json();
    const data = new Signup(body);
    return data;

  }

  private Handler(error: Error) {
    console.log(error);
  }

}
