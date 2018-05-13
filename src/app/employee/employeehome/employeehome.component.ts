import { Component, OnInit } from '@angular/core';
import {BillingService} from "../../services/billing.service";
import {Bill, StatusRespons} from "../../shared/classes/signup";

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {

  constructor(private billing: BillingService) {
  }

  arrofBill: Bill[] = [];
  bill: Bill = new Bill();
  payment: any=0;

  createbill: StatusRespons = new StatusRespons();
  sendemail: StatusRespons = new StatusRespons();
  sendmsg: StatusRespons= new StatusRespons();

  ngOnInit() {
  }

  GetBills(f) {
    this.billing.GetBills(f.account_id)
      .then(data => {
        this.arrofBill =[];
        this.arrofBill = data;
      })
      .catch(err => console.log(err));

  }

  OpenBill(item) {
    this.bill = item;
  }

  MakePaid(rrnum, billnum) {
    this.payment = 0;
    this.billing.MakePaid(rrnum,billnum)
      .then(data => {
        this.payment = data.state;
      })
      .catch(err => console.log(err));
  }

  MakeUnPaid(rrnum, billnum) {
    this.payment = 0;
    this.billing.MakeUnPaid(rrnum,billnum)
      .then(data => {
        this.payment = data.state;
      })
      .catch(err => console.log(err));
  }

  CreateBills() {
   this.billing.CreateBill()
     .then(data => {
       this.createbill = data;
     })
     .catch(err => console.log(err));
  }

  SendEmails() {
    this.billing.SendEmail()
      .then(data => {
        this.sendemail = data;
      })
      .catch(err => console.log(err));
  }


  SendMsgs() {
    this.billing.SendMessage()
      .then(data => {
        this.sendmsg = data;
      })
      .catch(err => console.log(err));
  }

  ClearAll() {
    this.createbill = new StatusRespons();
    this.sendemail= new StatusRespons();
    this.sendmsg= new StatusRespons();
  }


}
