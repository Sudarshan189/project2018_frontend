import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Bill, KWHUpdate, StatusRespons} from "../shared/classes/signup";

@Injectable()
export class BillingService {

  getmeterdata_link = "http://localhost:8080/details/";
  getbills_link = "http://localhost:8080/getbills/";
  paidbill_link = "http://localhost:8080/paid/";
  unpaidbill_link = "http://localhost:8080/unpaid/";
  createbill_link = "http://localhost:8080/createallbill";
  sendemail_link = "http://localhost:8080/sendemailtoall";
  sendmsg_link = "http://localhost:8080/sendmessagetoall";


  constructor(private http: Http) { }

  GetMeterData(data: any): Promise<any> {
    return this.http.get(this.getmeterdata_link+data)
      .toPromise()
      .then(this.ProcessGetdata)
      .catch(this.Handler)
  }

  GetBills(data: any): Promise<any> {
    return this.http.get(this.getbills_link+data)
      .toPromise()
      .then(this.ProcessGetbills)
      .catch(this.Handler)
  }

  MakePaid(rrnum: any, billnum: any): Promise<any> {
    return this.http.get(this.paidbill_link+rrnum+"/"+billnum)
      .toPromise()
      .then(this.ProcessStatus)
      .catch(this.Handler)
  }

  MakeUnPaid(rrnum: any, billnum: any): Promise<any> {
    return this.http.get(this.unpaidbill_link+rrnum+"/"+billnum)
      .toPromise()
      .then(this.ProcessStatus)
      .catch(this.Handler)
  }

  CreateBill(): Promise<any> {
    return this.http.get(this.createbill_link)
      .toPromise()
      .then(this.ProcessStatus)
      .catch(this.Handler)
  }

  SendEmail(): Promise<any> {
    return this.http.get(this.sendemail_link)
      .toPromise()
      .then(this.ProcessStatus)
      .catch(this.Handler)
  }

  SendMessage(): Promise<any> {
    return this.http.get(this.sendmsg_link)
      .toPromise()
      .then(this.ProcessStatus)
      .catch(this.Handler)
  }



  private ProcessGetdata(res) {
    const body = res.json();
    const data = new KWHUpdate(body);
    return data;
   }


  private ProcessGetbills(res) {
    const body = res.json();
    const bills = [];
    for( let i=0; i < body.length;i++ ) {
      const bill = new Bill(body[i]);
      bills.push(bill);
    }
    return bills;
  }

  private ProcessStatus(res) {
    const body = res.json();
    const data = new StatusRespons(body);
    return data;
  }

  private Handler(error: Error) {
    console.log(error);
  }

}
