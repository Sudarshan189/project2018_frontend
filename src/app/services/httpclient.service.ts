import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";

@Injectable()
export class HttpclientService {

  http: any;

  constructor(http: Http) {
    this.http = http;
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' + btoa('listurgiftuser:djasf32#@!#nsd'));
    headers.append('accept-version', '1.0.0');
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options);
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
