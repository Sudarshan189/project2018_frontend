import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import {Switch} from "../shared/classes/signup";

@Injectable()
export class SwitchService {

  constructor(private http: Http) { }

  getswitchstatus_link = "http://localhost:8080/getstate/";
  controlswitch_link = "http://localhost:8080/smartsoc/";

  GetSwitchStatus(data: any): Promise<any> {
    return this.http.get(this.getswitchstatus_link+data)
      .toPromise()
      .then(this.ProcessSwitch)
      .catch(this.Handler)
  }

  ClickSwitch(rrnum:any,socno:any,state:any): Promise<any> {
    return this.http.get(this.controlswitch_link+rrnum+"/"+socno+"/"+state)
      .toPromise()
      .then(this.ProcessSwitch)
      .catch(this.Handler)
  }







  private ProcessSwitch(res) {
    const body = res.json();
    const switches = [];
    for (let i=0;i<body.length;i++) {
      const data = new Switch(body[i])
      switches.push(data);
    }
    return switches;
  }


  private Handler(error: Error) {
    console.log(error);
  }




}
